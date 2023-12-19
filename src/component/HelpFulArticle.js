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
        <section>
            <div className="feedback__box">
                {!feedbackSubmitted && !isContactFormSubmitted && <div>
                    {feedback !== "Negative" && <div>
                    <h3 className='feedback__box__title feedback__box__title_helpful'>
                        Was this page helpful?
                        <div className='feedback__box__icons'>
                            <button role="button"  tabindex="0" type="button" onClick={() => { feedbackSubmit() }} title='Document Feedback' aria-label="Document Feedback" >
                                {feedback == "Positive" ? 
                                <svg className='filled_svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 21H5V8H4C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21ZM20 8H13L14.122 4.632C14.2221 4.33141 14.2494 4.01134 14.2016 3.69815C14.1538 3.38496 14.0322 3.08761 13.847 2.8306C13.6617 2.57358 13.4181 2.36424 13.1361 2.21984C12.8541 2.07543 12.5418 2.00008 12.225 2H12L7 7.438V21H18L21.937 12.351L22 12.058V10C22 9.46957 21.7893 8.96086 21.4142 8.58579C21.0391 8.21071 20.5304 8 20 8Z" fill="#0569FF"/>
                                </svg>
                                : 
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 8H14.388L15.511 4.633C15.713 4.025 15.611 3.351 15.236 2.831C14.861 2.311 14.253 2 13.612 2H12C11.703 2 11.422 2.132 11.231 2.36L6.531 8H4C2.897 8 2 8.897 2 10V19C2 20.103 2.897 21 4 21H17.307C17.7139 20.9986 18.1108 20.8738 18.4452 20.6421C18.7797 20.4103 19.0359 20.0825 19.18 19.702L21.937 12.351C21.9789 12.2387 22.0002 12.1198 22 12V10C22 8.897 21.103 8 20 8ZM4 10H6V19H4V10ZM20 11.819L17.307 19H8V9.362L12.468 4H13.614L12.052 8.683C12.0013 8.83332 11.9871 8.99355 12.0107 9.15043C12.0343 9.3073 12.095 9.45629 12.1877 9.58504C12.2803 9.71379 12.4024 9.8186 12.5436 9.89076C12.6849 9.96293 12.8414 10.0004 13 10H20V11.819Z" fill="black"/>
                                </svg>
                                }
                            </button>
                            <button role="button" tabindex="0" type="button" onClick={() => { SetFeedback("Negative") }} title='Document Feedback' aria-label="Document Feedback">
                                {feedback == "Negative" ? 
                                <svg className='filled_svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 3H19V16H20C20.5304 16 21.0391 15.7893 21.4142 15.4142C21.7893 15.0391 22 14.5304 22 14V5C22 4.46957 21.7893 3.96086 21.4142 3.58579C21.0391 3.21071 20.5304 3 20 3ZM4 16H11L9.878 19.368C9.77789 19.6686 9.75061 19.9887 9.79843 20.3018C9.84624 20.615 9.96778 20.9124 10.153 21.1694C10.3383 21.4264 10.5819 21.6358 10.8639 21.7802C11.1459 21.9246 11.4582 21.9999 11.775 22H12L17 16.562V3H6L2.063 11.649L2 11.942V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16Z" fill="#0569FF"/>
                                </svg>
                                : 
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 16H9.612L8.489 19.367C8.287 19.975 8.389 20.649 8.764 21.169C9.139 21.689 9.747 22 10.388 22H12C12.297 22 12.578 21.868 12.769 21.64L17.469 16H20C21.103 16 22 15.103 22 14V5C22 3.897 21.103 3 20 3H6.693C6.28611 3.00135 5.88921 3.12616 5.55478 3.35792C5.22035 3.58969 4.96413 3.91749 4.82 4.298L2.063 11.649C2.02114 11.7613 1.9998 11.8802 2 12V14C2 15.103 2.897 16 4 16ZM20 14H18V5H20V14ZM4 12.181L6.693 5H16V14.638L11.532 20H10.386L11.948 15.317C11.9987 15.1667 12.0129 15.0064 11.9893 14.8496C11.9657 14.6927 11.905 14.5437 11.8123 14.415C11.7197 14.2862 11.5976 14.1814 11.4564 14.1092C11.3151 14.0371 11.1586 13.9996 11 14H4V12.181Z" fill="black"/>
                                </svg>
                                }
                            </button>
                        </div>
                    </h3>
                    </div>}
                    {feedback == "Negative" &&
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
                </div>}
                {feedbackSubmitted && <div className='feedback__box__thanks-title'>
                    <h3>Thanks for your feedback!</h3>
                </div>}
                {isContactFormSubmitted && <div className='feedback__box__thanks-title'>
                    <h3>Thanks for your feedback!</h3>
                </div>}
            </div>



        </section>
    );
}
