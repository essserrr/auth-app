import React from 'react';
import ProfileForm from './ProfileForm';

class ProfileFormWrapper extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isOpened: true,
      fields: {
        name: {
          value: "",
          error: false,
          validated: false,
        },
        mail: {
          value: "",
          error: false,
          validated: false,
        },
        phone: {
          value: "",
          error: false,
          validated: false,
        },
      },
    };
  }

  onChange = (event) => {
    const name = event.target.getAttribute("name")
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: {
          ...this.state.fields[name],
          value: event.target.value,
        },
      },
    })
  }

  onBlur = (event) => {
    const name = event.target.getAttribute("name")
    const type = event.target.getAttribute("type")
    this.validate(event.target.value, name, type)
  }

  validate = (value, name, type) => {
    const err = this.validateField(value, type)

    this.setState({
      fields: {
        ...this.state.fields,
        [name]: {
          ...this.state.fields[name],
          error: err,
          validated: !err,
        },
      },
    })
  }

  validateAll = () => {
    let newFields ={}
    Object.entries(this.state.fields).forEach((entry) => {
        let [filedName, filed] = [...entry];
        
        const err = this.validateField(filed.value, filedName)
        newFields[filedName] = {...this.state.fields[filedName], error: err, validated: !err}
    })
    this.setState({
      fields: {...newFields}
    })
    return Object.entries(newFields).reduce((sum, value) => {
      return sum || value[1].error
    }, false)
  }

  validateField = (value, type) => {
    switch (type) {
      case "name":
        return this.validateName(value)
      case "phone":
        return this.validatePhone(value)
      case "mail":
        return this.validateMail(value)
    }
    return false
  }

  validateName = (value) => {
    const regex = /^[^!@#$%^&*()_+\-|\{}[\]"'?/~`№]*(\s[^!@#$%^&*()_+\-|\{}[\]"'?/~`№]*)+/i;
    return !(regex.exec(value) !== null);
  }
  validatePhone = (value) => {
    value = value.replace(/ /g, "" )
    const regex = /^\+([\d]{11})/i;
    return !(regex.exec(value) !== null);
  }
  validateMail = (value) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !(regex.exec(value) !== null);
  }

  showDiolog = () => {
    const isError = this.validateAll()
    if (isError) return;
    this.setState({
      isOpened: !this.state.isOpened,
    })
  }

  closeDiolog = () => {
    this.setState({
      isOpened: !this.state.isOpened,
    })
  }
  
   onSubmit = async () => {
    const form = {...this.state.fields}
    localStorage.setItem('form-fields', JSON.stringify({...this.state.fields}) );
    try {
      const request = await fetch(".////")
      const response = JSON.parse(request.body)
      console.log(`Your answer is: ${response}`)
    } catch (err) {
      console.log(`Ooops, error: ${err}`)
    }
  }

  render() {
    return (
      <ProfileForm
        name={this.state.fields.name}
        mail={this.state.fields.mail}
        phone={this.state.fields.phone}

      onBlur={this.onBlur}
      onChange={this.onChange}
      showDiolog={this.showDiolog}
      closeDiolog={this.closeDiolog}
      onSubmit={this.onSubmit}
      isOpened={this.state.isOpened}
      />
    );
  }
}

export default ProfileFormWrapper;

