
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

function App() {
  const [tags, setTags] = React.useState(["example tag"])
  return (
  
      <ReactTagInput 
  tags={tags} 
  placeholder="Type and press enter"
  maxTags={10}
  editable={true}
  readOnly={false}
  removeOnBackspace={true}
  onChange={(newTags) => setTags(newTags)}
  validator={(value) => {
    // Don't actually validate e-mails this way
    const isEmail = value.indexOf("") !== -1;
    if (!isEmail) {
      alert("Please enter an e-mail address");
    }
    // Return boolean to indicate validity
    return isEmail;
  }}
/>
   
    
  )

  }

export default App;
