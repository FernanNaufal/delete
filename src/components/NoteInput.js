import React from "react";
import {BiCheck} from "react-icons/bi";
import PropTypes from "prop-types";

class NoteInput extends React.Component{
    constructor(props) {
        super(props); 
    
        this.state = {
          title: '',
          body: ''
        }
    
        this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
        this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }

      
    onTitleEventHandler(event) {
       
        this.setState((prevState,) => {
          return {
            ...prevState,
            title: event.target.value,
          }
        });
      }
    
      onBodyEventHandler(event) {
        this.setState((prevState,) => {
          return {
            ...prevState,
            body: event.target.innerHTML,
          }
        });
      }
    
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
      }
      
      render(){
        return (
          
            <form onSubmit={this.onSubmitEventHandler}>
                <div className="add-new-page">
                    <div className="add-new-page__input">
                        <input type="text" className="add-new-page__input__title" placeholder="Catatan rahasia" value={this.state.title} onChange={this.onTitleEventHandler}  />
                        <div className="add-new-page__input__body" data-placeholder="Sebenarnya saya adalah...." contentEditable onInput={this.onBodyEventHandler} />
                    </div>
                </div>
                <div className="add-new-page___action">
                <button className="action" type='submit' title="buat"><BiCheck/></button>
                </div>
            </form>         
        )
      }
    }

    NoteInput.propTypes={
      addNote: PropTypes.func.isRequired,

    }
export default NoteInput;