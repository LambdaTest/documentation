import React from 'react';
import { useEffect, useRef, useState } from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage'

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


                                <ThemedImage
                                    className="no-zoom"
                                    alt="Docusaurus themed image"
                                    sources={{
                                        light: useBaseUrl('/img/thumbsUp_light.svg'),
                                        dark: useBaseUrl('/img/thumbsUp_dark.svg'),
                                    }}
                                />
                                
                                

                            </button>
                            <button role="button" tabIndex="0" type="button" onClick={() => { SetFeedback("Negative") }} title='Document Feedback' aria-label="Document Feedback">
                                <ThemedImage
                                    className="no-zoom"
                                    alt="Docusaurus themed image"
                                    sources={{
                                        light: useBaseUrl('/img/thumbsDown_light.svg'),
                                        dark: useBaseUrl('/img/thumbsDown_dark.svg'),
                                    }}
                                />
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
                        <span onClick={() => window.openLTChatWidget()} className="chat_btn"><img loading="lazy" src="/support/img/Chat.svg" alt=" " role="presentation" title='Chat with Us' className='' width="16" height="16" />Chat with Us</span>
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