import React from "react"

class Delivery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isNameValid: true,
            inpNameClass: 'form-control',
            email: '',
            isEmailValid: true,
            phone: '',
            isPhoneValid: true,
            message: '',
            isMessageValid: true,
            isFormValid: false,
            btnSubmitClass: 'btn btn-primary text-uppercase disabled'
        }
        this.onChange= this.onChange.bind(this) // Разрешить методу доступ к классу
    }

    /**
     * Динамический перенос данных в state
     * @param e
     */
    onChange(e){
        const oldState = this.state
        oldState[e.target.name] = e.target.value
        this.setState(oldState)
        this.validateForm()
    }
    send(){
        // console.log('send')
        let data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        }

        fetch('http://localhost:3333/api/deliveries',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data=> {
                console.log(data)
            })
            .catch(err=> {
                console.log("Error")
                console.log(err)
            })
    }

    validateForm(){
        const oldState = this.state

        if(oldState.name.length === 0) {
            oldState.isNameValid = false
            oldState.inpNameClass = 'form-control is-invalid'
            // document.getElementById("name_required").style.display = "block"
        } else {
            oldState.isNameValid = true
            oldState.inpNameClass = 'form-control'
        }

        if(oldState.isNameValid && oldState.isEmailValid && oldState.isPhoneValid && oldState.isMessageValid) {
            oldState.isFormValid = true
            oldState.btnSubmitClass = 'btn btn-primary text-uppercase'
        } else {
            oldState.isFormValid = false
            oldState.btnSubmitClass = 'btn btn-primary text-uppercase disabled'
        }

        this.setState(oldState);
    }

   render() {
        return (
            <div className={"body-contact"} id={"contact"}>
                <div className={"text-before-form-contact"}>Виникли питання?</div>
                <div className="my-5 contact-form">
                    <form id="contactForm">
                        <div className="form-floating contact-form-piece">
                            <input onChange={this.onChange} name="name" className={this.state.inpNameClass} id="name" type="text" placeholder="Enter your name..." />
                            <label htmlFor="name" className={"label-text"}>Name</label>
                            <div className="invalid-feedback" id="name_required">A name is required.</div>
                        </div>
                        <div className="form-floating contact-form-piece">
                            <input onChange={this.onChange}  name="email" className="form-control" id="email" type="email" placeholder="Enter your email..."/>
                            <label htmlFor="email" className={"label-text"}>Email address</label>
                            <div className="invalid-feedback" id="email_required">An email is required.</div>
                            <div className="invalid-feedback" id="email_email">Email is not valid.</div>
                        </div>
                        <div className="form-floating contact-form-piece">
                            <input onChange={this.onChange}  name="phone" className="form-control" id="phone" type="tel" placeholder="Enter your phone number..."/>
                            <label htmlFor="phone" className={"label-text"}>Phone Number</label>
                            <div className="invalid-feedback" id="phone_required">A phone number is required.
                            </div>
                        </div>
                        <div className="form-floating contact-form-piece">
                            <textarea onChange={this.onChange} className="form-control" id="message" placeholder="Enter your message here..." style={{height: '12rem'}} name={"message"}> </textarea>
                            <label htmlFor="message" className={"label-text"}>Message</label>
                            <div className="invalid-feedback" id="message_required">A message is required.</div>
                        </div>

                        <div className="d-none" id="submitErrorMessage">
                            <div className="text-center text-danger mb-3">Error sending message!</div>
                        </div>

                        <button onClick={this.send.bind(this)} disabled={!this.state.isFormValid} className={this.state.btnSubmitClass} id="submitButton" type="button">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Delivery