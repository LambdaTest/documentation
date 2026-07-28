// Modal.js
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import countryList from './country.json';
import { getCookie, getProductType, injectRevenueHero } from './utilities';

const DemoPopup = ({ show, open_modal, preselectedProductType, sub_source }) => {
    const [isLoading, setLoading] = useState(false);
    const [country, setCountry] = useState([]);
    const [error, setError] = useState(null);

    const [showModal, setShowModal] = useState(false);
    let modalOpen = open_modal && open_modal == true ? true : false;
    const toggleModal = () => {
        setShowModal(!showModal);
        if (!showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }
    useEffect(() => {
        setShowModal(modalOpen);
    }, [modalOpen])

    let form = useRef();

    let currentFormData = {};

    const listenToRevenueHeroWidget = (event) => {
        if (event?.data?.type === "MEETING_BOOKED") {
            window.dataLayer?.push({
                event: "user_demo_booked"
            });
            window.sendAnalytics?.("RevenueHero: Meeting Booked", {
                product_interested_in: currentFormData.product_interested_in,
            });
        }

        if (event?.data?.type === "CLOSE_DIALOG") {
            window.sendAnalytics?.("RevenueHero: Pop Up Closed", {
                product_interested_in: currentFormData.product_interested_in,
            });
            window.removeEventListener("message", listenToRevenueHeroWidget);
        }
    };

    useEffect(() => {
        injectRevenueHero();
    }, []);

    // Password managers and autofill extensions simulate typing into this form by
    // dispatching plain `new Event('keydown')` objects. Those are not
    // KeyboardEvents, so they carry no `key`, and typesense-docsearch-react reads
    // `event.key.toLowerCase()` on every keydown reaching window without guarding
    // it. Capture phase runs before its (bubble phase) listener, so give such
    // events a safe value first. Empty string is falsy against both of the
    // shortcuts it checks, so search behaviour is unchanged.
    useEffect(() => {
        const patchKeylessKeydown = (event) => {
            if (event.key === undefined) {
                Object.defineProperty(event, 'key', { value: '', configurable: true });
            }
        };
        window.addEventListener('keydown', patchKeylessKeydown, true);
        return () => {
            window.removeEventListener('keydown', patchKeylessKeydown, true);
        };
    }, []);

    useEffect(() => {
        fetch(`https://auth.lambdatest.com/api/country-details`)
            .then(res => res.json())
            .then(
                (result) => {
                    setCountry(result)
                },
                (error) => {
                    setError("Failed to load country data");
                }
            )
    }, [])

    const handlecount = () => {
        const fountCount = countryList.find(e => e.country_code == country.iso_code)
        return fountCount?.name
    }

    // Custom select state
    const [isCountrySelectOpen, setIsCountrySelectOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countrySelectRef = useRef(null);
    const hiddenIsdCodeInputRef = useRef(null);

    // Product type custom select state
    const [isProductSelectOpen, setIsProductSelectOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productSelectRef = useRef(null);
    const hiddenProductInputRef = useRef(null);

    useEffect(() => {
        if (country && country.iso_code) {
            const foundCountry = countryList.find(e => e.country_code == country.iso_code);
            setSelectedCountry({
                name: foundCountry?.name || handlecount(),
                value: country.calling_code,
                country_code: country.iso_code
            });
        }
    }, [country]);

    // Initialize selected product
    useEffect(() => {
        if (getProductType() && getProductType().type) {
            const productType = preselectedProductType || getProductType().type;
            const productList = getProductType(true);
            if (productList && productList.length > 0) {
                const foundProduct = productList.find(el => el.type === productType);
                if (foundProduct) {
                    setSelectedProduct({
                        label: foundProduct.label,
                        type: foundProduct.type
                    });
                }
            }
        }
    }, [preselectedProductType]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (countrySelectRef.current && !countrySelectRef.current.contains(event.target)) {
                setIsCountrySelectOpen(false);
            }
            if (productSelectRef.current && !productSelectRef.current.contains(event.target)) {
                setIsProductSelectOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleCountrySelect = (item) => {
        setSelectedCountry({
            name: item.name,
            value: item.value,
            country_code: item.country_code
        });
        setIsCountrySelectOpen(false);
        // Update the hidden input value
        if (hiddenIsdCodeInputRef.current) {
            hiddenIsdCodeInputRef.current.value = item.value;
        }
    };

    const handleProductSelect = (item) => {
        setSelectedProduct({
            label: item.label,
            type: item.type
        });
        setIsProductSelectOpen(false);
        // Update the hidden input value
        if (hiddenProductInputRef.current) {
            hiddenProductInputRef.current.value = item.type;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError(null); // Clear any previous errors

        let utmJsonTemp = getCookie("utm");
        const gclid = getCookie("gclid");
        const { email, mobile_no, isd_code, first_name, last_name, product_interested_in, message } = form.current.elements;

        let formdata = {
            email: email.value || '',
            mobile_no: mobile_no.value || '',
            first_name: first_name.value || '',
            product_interested_in: product_interested_in ? product_interested_in.value : '',
            last_name: last_name.value || '',
            isd_code: isd_code.value || '',
            message: message ? message.value || '' : '',
            source_page_url: window.location.href,
            source_page_title: document.title,
            query_type: "Schedule a Demo",
            campaign_id: "701F9000001H1EdIAK",
            source: `Web Submissions`,
            utm: utmJsonTemp,
            gclid: gclid,
        };

        if (sub_source) {
            formdata.sub_source = sub_source;
        }
        currentFormData = formdata; // Save for listener access

        try {
            await axios.post(`https://forms.lambdatest.com/api/forms/contact`, JSON.stringify(formdata), {
                headers: {
                    'Content-type': 'application/json',
                },
            });

            form.current.reset();

            window.dataLayer?.push({ event: "book_a_demo_form_submitted" });

            if (formdata.email && formdata.email.toLowerCase().endsWith('gmail.com')) {
                window.sendAnalytics?.('Demo_Schedule_Gmail');
                window.location.href = `https://www.testmuai.com/thank-you`;
                return;
            }

            window.sendAnalytics?.('book_a_demo_form_submitted', {
                'event': 'book_a_demo_form_submitted',
                'eventAction': 'success',
                'eventLabel': window.location.href,
            })
            window.sendAnalytics?.('Demo_Schedule');

            // Add RevenueHero scheduling logic here
            const revenueHeroFormDataToSend = {
                ...formdata,
                ...country,
            };
            const hero = new RevenueHero({
                routerId: '630',
                showLoader: true
            });

            window.addEventListener("message", listenToRevenueHeroWidget);
            hero.submit({
                ...revenueHeroFormDataToSend
            }).then((data) => {
                hero.dialog.open(data);
                setShowModal(false);
                document.body.style.overflow = "unset";
            }).catch((error) => {
                console.log(error);
                window.removeEventListener("message", listenToRevenueHeroWidget);
            });
        } catch (error) {
            const res = error?.response?.data || {};
            setError(res.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }

    };

    return (<>

        <button className='demoBtn' onClick={toggleModal}>Book a Demo</button>

        <div id="m_class" className={`demo_popup_overlay demo_popup_header_demo ${showModal ? 'shown' : ''}`}>
            <div className='content text-left'>
                <div className="demo_popup_box">
                    <div className="demo_popup_form">
                        <span onClick={toggleModal} className="demo_popup_close">&times;</span>
                        <div className="demo_popup_form_title">Schedule Your Personal Demo </div>
                        <form ref={form} onSubmit={handleSubmit} id="demoForm">
                            <div className="demo_popup_grid">
                                <div>
                                    <input
                                        type="text"
                                        id="inputFirstName"
                                        name="first_name"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        id="inputLastName"
                                        name="last_name"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="demo_popup_field">
                                <input
                                    type="email"
                                    id="inputEmail"
                                    name="email"
                                    placeholder="Work Email Address"
                                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                    required
                                />
                            </div>
                            <div className="demo_popup_field">
                                <div className="demo_popup_phone_row">
                                    {showModal && (
                                        <div className="demo_popup_select_wrapper" ref={countrySelectRef}>
                                            <input
                                                type="hidden"
                                                name="isd_code"
                                                ref={(el) => {
                                                    hiddenIsdCodeInputRef.current = el;
                                                    if (el) {
                                                        if (selectedCountry) {
                                                            el.value = selectedCountry.value;
                                                        } else if (country && country.calling_code) {
                                                            el.value = country.calling_code;
                                                        }
                                                    }
                                                }}
                                                required
                                            />
                                            <div
                                                className={`demo_popup_select ${isCountrySelectOpen ? 'demo_popup_select_open' : ''}`}
                                                onClick={() => setIsCountrySelectOpen(!isCountrySelectOpen)}
                                            >
                                                <span className="demo_popup_select_text">
                                                    {selectedCountry ? selectedCountry.name : handlecount() || 'Select Country'}
                                                </span>
                                                <span className="demo_popup_select_arrow">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 6L8 10L12 6" stroke="#4D4D4D" strokeWidth="1.25" strokeLinecap="square" />
                                                    </svg>
                                                </span>
                                            </div>
                                            {isCountrySelectOpen && (
                                                <ul className="demo_popup_select_options">
                                                    {countryList && countryList.length > 0 && countryList.map((item, index) => (
                                                        <li
                                                            key={index}
                                                            className={`demo_popup_select_option ${selectedCountry && selectedCountry.country_code === item.country_code ? 'demo_popup_select_option_selected' : ''}`}
                                                            onClick={() => handleCountrySelect({
                                                                name: item.name,
                                                                value: item.value,
                                                                country_code: item.country_code
                                                            })}
                                                        >
                                                            {item.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}

                                    <input type="tel" id="demo_mobileid" name="mobile_no" placeholder="Phone Number" pattern="\d*" maxLength={15} required />
                                </div>
                            </div>
                            <div className="demo_popup_field">
                                <label>Select Product
                                    {getProductType() && getProductType().type && (
                                        <div className="demo_popup_select_wrapper" ref={productSelectRef}>
                                            <input
                                                type="hidden"
                                                name="product_interested_in"
                                                ref={(el) => {
                                                    hiddenProductInputRef.current = el;
                                                    if (el) {
                                                        if (selectedProduct) {
                                                            el.value = selectedProduct.type;
                                                        } else {
                                                            const productType = preselectedProductType || getProductType().type;
                                                            el.value = productType;
                                                        }
                                                    }
                                                }}
                                                required
                                            />
                                            <div
                                                className={`demo_popup_select demo_popup_product_select ${isProductSelectOpen ? 'demo_popup_select_open' : ''}`}
                                                onClick={() => setIsProductSelectOpen(!isProductSelectOpen)}
                                            >
                                                <span className="demo_popup_select_text">
                                                    {selectedProduct ? selectedProduct.label : (getProductType(true) && getProductType(true).length > 0 ? getProductType(true).find(el => el.type === (preselectedProductType || getProductType().type))?.label : 'Select Product')}
                                                </span>
                                                <span className="demo_popup_select_arrow">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 6L8 10L12 6" stroke="#4D4D4D" strokeWidth="1.25" strokeLinecap="square" />
                                                    </svg>
                                                </span>
                                            </div>
                                            {isProductSelectOpen && (
                                                <ul className="demo_popup_select_options">
                                                    {getProductType(true) && getProductType(true).length > 0 && getProductType(true).map((el, index) => (
                                                        <li
                                                            key={index}
                                                            className={`demo_popup_select_option ${selectedProduct && selectedProduct.type === el.type ? 'demo_popup_select_option_selected' : ''}`}
                                                            onClick={() => handleProductSelect({
                                                                label: el.label,
                                                                type: el.type
                                                            })}
                                                        >
                                                            {el.label}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </label>
                            </div>
                            <div className="demo_popup_field">
                                <textarea name="message" className="demo_popup_message" placeholder="Your message"></textarea>
                            </div>
                            {error && <div className="demo_popup_error">{error}</div>}
                            <div className="demo_popup_action">
                                <button type="submit" id="contbtn" className="demo_popup_submit" disabled={isLoading}>Schedule Demo</button>
                            </div>
                            <input type="hidden" name="zc_gad" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
    );
};

export default DemoPopup;
