/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

//Mui
import { SvgIcon } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

firebase.initializeApp({
  apiKey: "AIzaSyBvBDRhTbx1tuJ46YTrBGO3p08Lgg0xQ_4",
  authDomain: "fir-portfolio-f958a.firebaseapp.com",
  projectId: "fir-portfolio-f958a",
  storageBucket: "fir-portfolio-f958a.appspot.com",
  messagingSenderId: "456855860948",
  appId: "1:456855860948:web:705a9866a38cd95ad66d41",
  measurementId: "G-48VE6V1CRF",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
// const analytics = firebase.analytics();

if (typeof window !== "undefined") {
  console.log("windowError occured");
}

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="App">
        <header>
          <h1 title="Firebase React Chat">🔥⚛️💬</h1>
          <SignOut />
        </header>
        <section>{user ? <ChatRoom /> : <SignIn />}</section>
        <a href="javascript:history.back()" title="Main" className="paginationAnchor2">
          <SvgIcon component={ChevronLeftIcon}></SvgIcon>Back
        </a>
      </div>
    </>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          className="MessageSubmit"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />
        <button className="sendbutton" type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          className="FireBaseImage"
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p className="FireBaseParagraph">{text}</p>
      </div>
    </>
  );
}

export default App;
