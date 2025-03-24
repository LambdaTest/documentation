import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
export default function HelpFulArticle() {
    const thumbsUpLight = useBaseUrl("/img/thumbsUp_light.svg");
    const thumbsUpDark = useBaseUrl("/img/thumbsUp_dark.svg");
    const thumbsDownLight = useBaseUrl("/img/thumbsDown_light.svg");
    const thumbsDownDark = useBaseUrl("/img/thumbsDown_dark.svg");
    return (
        <HelpFulArticleClass 
            thumbsUpLight={thumbsUpLight}
            thumbsUpDark={thumbsUpDark}
            thumbsDownLight={thumbsDownLight}
            thumbsDownDark={thumbsDownDark}
        />
    );
}
class HelpFulArticleClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: null,
            feedbackSubmitted: false,
            isContactFormSubmitted: false,
            selectedOption: "",
            message: "",
            formMsgError: false,
            feedbackOptionErr: false
        };
        
        this.handleThumbsUp = this.handleThumbsUp.bind(this);
        this.handleThumbsDown = this.handleThumbsDown.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getCookie = this.getCookie.bind(this);
    }
    
    getCookie(name) {
        const cookies = document.cookie.split("; ");
        const cookie = cookies.find((c) => c.startsWith(name + "="));
        return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
    }
    
    handleThumbsUp() {
        
        fetch("https://test-backend.lambdatest.com/api/website_feed/thumbs_up", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: window.location.href }),
        })
            .then(() => this.setState({ feedbackSubmitted: true }))
            .catch((error) => console.error("Error:", error));
    }
    
    handleThumbsDown() {
        this.setState({ feedback: "Negative" });
    }
    
    handleOptionChange(e) {
        this.setState({
            selectedOption: e.target.value,
            feedbackOptionErr: false,
            formMsgError: e.target.value !== "other" ? false : this.state.formMsgError
        });
    }
    
    handleMessageChange(e) {
        this.setState({
            message: e.target.value,
            formMsgError: e.target.value.trim() ? false : this.state.formMsgError
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.state.selectedOption) {
            this.setState({ feedbackOptionErr: true });
            return;
        }
        
        if (this.state.selectedOption === "other" && !this.state.message.trim()) {
            this.setState({ formMsgError: true });
            return;
        }
        
        fetch("https://test-backend.lambdatest.com/api/website_feed/thumbs_down", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                feedback: this.state.selectedOption === "other" ? this.state.message : this.state.selectedOption,
                url: window.location.href,
                utm: this.getCookie("utm"),
            }),
        })
            .then(() => this.setState({ isContactFormSubmitted: true }))
            .catch((error) => console.error("Error:", error));
    }
    
    render() {
        const { 
            feedback, 
            feedbackSubmitted, 
            isContactFormSubmitted, 
            selectedOption,
            message, 
            formMsgError, 
            feedbackOptionErr 
        } = this.state;
        
        const {
            thumbsUpLight,
            thumbsUpDark,
            thumbsDownLight,
            thumbsDownDark
        } = this.props;
        
        const otherSelected = selectedOption === "other";
        
        return (
            <div className="feedback__box">
                <div className="support_container">
                    <div>
                    <h3 className="feedback__box__title feedback__box__title_helpful">
                        Do you find this helpful?
                    </h3>
                    {!feedbackSubmitted && !isContactFormSubmitted ? (
                        <div className="feedback__box__icons">
                            <button onClick={this.handleThumbsUp} title="Thumbs Up" type="button">
                                <ThemedImage
                                    className="no-zoom"
                                    alt="Thumbs Up"
                                    sources={{
                                        light: thumbsUpLight,
                                        dark: thumbsUpDark,
                                    }}
                                />
                            </button>
                            <button onClick={this.handleThumbsDown} title="Thumbs Down" type="button">
                                <ThemedImage
                                    className="no-zoom"
                                    alt="Thumbs Down"
                                    sources={{
                                        light: thumbsDownLight,
                                        dark: thumbsDownDark,
                                    }}
                                />
                            </button>
                        </div>
                    ) : (
                        <div className="feedback__box__thanks-title">
                            <h3>Thanks for your feedback!</h3>
                        </div>
                    )}
                </div>
                               <div className="social_button">
                        <h3 className='feedback__box__title feedback__box__title_helpful'>Still need help?</h3>
                        <span onClick={() => window.openLTChatWidget()} className="chat_btn"><img loading="lazy" src="/support/img/Chat.svg" alt=" " role="presentation" title='Chat with Us' className='' width="16" height="16" />Chat with Us</span>
                        <a role="button" tabIndex="0" href="https://community.lambdatest.com/" target="_blank" className="chat_btn"><img loading="lazy" src="/support/img/community.svg" alt=" " role="presentation" title='Chat with Us' className='' width="16" height="16" />Ask the Community</a>
                        {/* <a href="https://accounts.lambdatest.com/register" target="_blank"  className="btnlink">Start Free Testing</a> */}
                    </div>
                    </div> 

                {feedback === "Negative" && !isContactFormSubmitted && (
                    <form onSubmit={this.handleSubmit} className="feedback__box__form">
                        <p className="feedback__box__form__title">
                            We're sorry to hear that. Please share your feedback with us.
                        </p>
                        <ol className="feedback__box__form__radios">
                            {[
                                "The information that I need is partially explained",
                                "This page does not contain what I am looking for.",
                                "This content & code samples are not accurate and outdated",
                                "The information that I need is not easy to understand",
                            ].map((option, index) => (
                                <li key={index} className="feedback__box__form__radio_div">
                                    <input 
                                        type="radio" 
                                        name="feedback_option" 
                                        id={`option_${index}`}
                                        value={option} 
                                        checked={selectedOption === option}
                                        onChange={this.handleOptionChange} 
                                    />
                                    <span>{option}</span>
                                </li>
                            ))}
                            <li className="feedback__box__form__radio_div">
                                <input 
                                    type="radio" 
                                    name="feedback_option" 
                                    id="option_other"
                                    value="other" 
                                    checked={selectedOption === "other"}
                                    onChange={this.handleOptionChange} 
                                />
                                <span>Other (please tell us more below)</span>
                            </li>
                        </ol>
                        {feedbackOptionErr && <p className="feedback__box__form__red_alert">Please select an option.</p>}
                        {otherSelected && (
                            <>
                                <textarea 
                                    name="message" 
                                    value={message}
                                    onChange={this.handleMessageChange}
                                    placeholder="What were you looking for?" 
                                    className="feedback__form__control"
                                ></textarea>
                                {formMsgError && <p className="feedback__box__form__red_alert">Please write your feedback</p>}
                            </>
                        )}
                        <button type="submit" className="feedback__form__submit__btn">
                            Submit
                        </button>
                    </form>
                )}
            </div>
        );
    }
}