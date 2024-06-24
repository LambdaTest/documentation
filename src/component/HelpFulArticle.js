import React from 'react';
import { useEffect, useRef, useState } from "react";

export default function HelpFulArticle() {
    const [feedback, SetFeedback] = useState();
    const [feedbackSubmitted, SetFeedbackSubmitted] = useState(false);
    const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);

    const feedbackSubmit = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "url": window.location.href,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://test-backend.lambdatest.com/api/website_feed/thumbs_up`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        SetFeedback("")
        SetFeedbackSubmitted(true)
    }


    const handleOptionChange = (e) => {
        if(e.target.value) {
            setFeedbackOptionErr(false);
        }
        if(e.target.value === 'other') {
            setOtherSelected(true);
        } else {
            setOtherSelected(false);
            setFormMsgError(false);
        }
    }

    let form = useRef();
    const [formMsgError, setFormMsgError] = useState(false);
    const [feedbackOptionErr, setFeedbackOptionErr] = useState(false);
    const [otherSelected, setOtherSelected] = useState(false);
    const getContactFormResponse = (res) => {
        setIsContactFormSubmitted(res);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let utmJsonTemp = getCookie("utm")
        const { message, feedback_option } = form.current;
        console.log("feedback_option.value", feedback_option.value)
        let feedBackString = "";
        if(feedback_option.value == '' || feedback_option.value == null) {
            setFeedbackOptionErr(true);
            return
        }
        feedBackString = feedback_option.value;
        if(feedback_option.value === 'other') {
            setOtherSelected(true);
            if(message.value == '' || message.value == null) {
                setFormMsgError(true);
                return
            } else {
                setFormMsgError(false);
                feedBackString = message.value;
            }
        }
        


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            feedback: feedBackString,
            url: window.location.href,
            utm: utmJsonTemp
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://test-backend.lambdatest.com/api/website_feed/thumbs_down`, requestOptions)
            .then(response => response.text())
            .then(result => {
                getContactFormResponse(true);
            })
            .catch(error => console.log('error', error));

    };
    useEffect(() => {
        // console.log('isContactFormSubmitted', isContactFormSubmitted)
    }, [isContactFormSubmitted])

    return (
            <div className="feedback__box">
                
                <div className='support_container'>
                
                    <div>
                        <h3 className='feedback__box__title feedback__box__title_helpful'>Do you find this helpful?</h3>
                    {!feedbackSubmitted && !isContactFormSubmitted &&
                       <div className='feedback__box__icons'>
                            <button role="button"  tabIndex="0" type="button" onClick={() => { feedbackSubmit() }} title='Document Feedback' aria-label="Document Feedback" >
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_20381_3252)">
                                        <g clipPath="url(#clip0_20381_3252)">
                                            <rect width="32" height="32" rx="6" fill="#F7F7F7" />
                                            <path d="M17.4688 13.2816L17.2831 13.9211H17.949H21.55C21.9189 13.9211 22.3333 14.291 22.3333 14.8947V16.3684V16.3691C22.3334 16.4058 22.3277 16.4408 22.3174 16.4722L20.549 21.8869C20.5489 21.8871 20.5489 21.8874 20.5488 21.8876C20.4842 22.0827 20.3733 22.2398 20.2411 22.3449L20.2411 22.345C20.1099 22.4493 19.9633 22.4992 19.8207 22.5H11.2833C10.9144 22.5 10.5 22.1301 10.5 21.5263V14.8947C10.5 14.291 10.9144 13.9211 11.2833 13.9211H12.9074H13.1623L13.3121 13.7147L16.327 9.56007C16.3271 9.55994 16.3272 9.55981 16.3273 9.55969C16.3663 9.50644 16.403 9.5 16.4167 9.5H17.451C17.6708 9.5 17.9095 9.62338 18.0696 9.87809C18.2315 10.136 18.2808 10.4845 18.1892 10.8011L17.4688 13.2816Z" stroke="#666666" />
                                        </g>
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="#D4D4D4" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_20381_3252" x="0" y="0" width="32" height="33" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="1" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0.04 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20381_3252" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20381_3252" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_20381_3252">
                                            <rect width="32" height="32" rx="6" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </button>
                            <button role="button" tabIndex="0" type="button" onClick={() => { SetFeedback("Negative") }} title='Document Feedback' aria-label="Document Feedback">
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_20381_3253)">
                                        <g clipPath="url(#clip0_20381_3253)">
                                            <rect width="32" height="32" rx="6" fill="#F7F7F7" />
                                            <path d="M17.4688 18.7184L17.2831 18.0789H17.949H21.55C21.9189 18.0789 22.3333 17.709 22.3333 17.1053V15.6316V15.6309C22.3334 15.5942 22.3277 15.5592 22.3174 15.5278L20.549 10.1131C20.5489 10.1129 20.5489 10.1126 20.5488 10.1124C20.4842 9.91729 20.3733 9.76025 20.2411 9.65507L20.2411 9.65505C20.1099 9.55066 19.9633 9.50076 19.8207 9.5H11.2833C10.9144 9.5 10.5 9.86988 10.5 10.4737V17.1053C10.5 17.709 10.9144 18.0789 11.2833 18.0789H12.9074H13.1623L13.3121 18.2853L16.327 22.4399C16.3271 22.4401 16.3272 22.4402 16.3273 22.4403C16.3663 22.4936 16.403 22.5 16.4167 22.5H17.451C17.6708 22.5 17.9095 22.3766 18.0696 22.1219C18.2315 21.864 18.2808 21.5155 18.1892 21.1989L17.4688 18.7184Z" stroke="#666666" />
                                        </g>
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="#D4D4D4" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_20381_3253" x="0" y="0" width="32" height="33" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="1" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0 0.121569 0 0 0 0.04 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20381_3253" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20381_3253" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_20381_3253">
                                            <rect width="32" height="32" rx="6" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    }
                    {feedbackSubmitted && <div className='feedback__box__thanks-title'>
                        <h3>Thanks for your feedback!</h3>
                    </div>}
                    {isContactFormSubmitted && <div className='feedback__box__thanks-title'>
                        <h3>Thanks for your feedback!</h3>
                    </div>}
                    </div>

                    <div className="social_button">
                        <h3 className='feedback__box__title feedback__box__title_helpful'>Still need help?</h3>
                        <button onClick={() => window.openLTChatWidget()} className="chat_btn"><img loading="lazy" src="/support/img/Chat.svg" alt=" " role="presentation" title='Chat with Us' className='' width="16" height="16" />Chat with Us</button>
                        <a role="button" tabIndex="0" href="https://community.lambdatest.com/" target="_blank" className="chat_btn"><img loading="lazy" src="/support/img/community.svg" alt=" " role="presentation" title='Chat with Us' className='' width="16" height="16" />Ask the Community</a>
                        {/* <a href="https://accounts.lambdatest.com/register" target="_blank"  className="btnlink">Start Free Testing</a> */}
                    </div>
                </div>

            {feedback == "Negative" && !isContactFormSubmitted &&
                        <form ref={form} onSubmit={handleSubmit} className="feedback__box__form">
                            <p className='feedback__box__form__title'>We're sorry to hear that. Please share your feedback with us.</p>
                            <ol className="feedback__box__form__radios">
                                <li className='feedback__box__form__radio_div'>
                                    <input type="radio" name="feedback_option" value={"The information that I need is partially explained"} onChange={handleOptionChange} />
                                    <span>The information that I need is partially explained</span>
                                </li>
                                <li className='feedback__box__form__radio_div'>
                                    <input type="radio" name="feedback_option" value={"This page does not contain what I am looking for."} onChange={handleOptionChange}  />
                                    <span>This page does not contain what I am looking for.</span>
                                </li>
                                <li className='feedback__box__form__radio_div'>
                                    <input type="radio" name="feedback_option" value={"This content & code samples are not accurate and outdated"} onChange={handleOptionChange}  />
                                    <span>This content & code samples are not accurate and outdated</span>
                                </li>
                                <li className='feedback__box__form__radio_div'>
                                    <input type="radio" name="feedback_option" value={"The information that I need is not easy to understand"} onChange={handleOptionChange}  />
                                    <span>The information that I need is not easy to understand</span>
                                </li>
                                <li className='feedback__box__form__radio_div'>
                                    <input type="radio" name="feedback_option" value={"other"} onChange={handleOptionChange}  />
                                    <span>Other (please tell us more below)</span>
                                </li>
                            </ol>
                            {feedbackOptionErr && <p className='feedback__box__form__red_alert'>Please select an option.</p>}
                            <div>
                                {otherSelected && <textarea id="messageid" name="message"  placeholder="What were you looking" className='feedback__form__control'></textarea>}
                                {otherSelected && formMsgError && <p className='feedback__box__form__red_alert'>Please write your feedback</p>}
                                <button type="submit" className='feedback__form__submit__btn'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    }
                
                
            </div>
    );
}
