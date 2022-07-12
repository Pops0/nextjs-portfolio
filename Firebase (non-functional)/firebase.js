// import * as firebase from 'firebase/compat/app'; 
// import 'firebase/compat/firestore'; 
// import 'firebase/compat/auth'; 
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// import { initializeApp } from "firebase/app";

// //-----------------------------------------------------------------------------
// const functions = require('firebase-functions');
// const Filter = require('bad-words');
// const admin = require('firebase-admin');
// admin.initializeApp();
// const db = admin.firestore();
// exports.detectEvilUsers = functions.firestore
//    .document('messages/{msgId}')
//    .onCreate(async (doc, ctx) => {

//     const filter = new Filter();
//     const { text, uid } = doc.data();

//     if (filter.isProfane(text)) {
//       const cleaned = filter.clean(text);
//       await doc.ref.update({text: `😬 You are banend for saying '${cleaned}'`})
//       await db.collection('banned').doc(uid).set({})
//     }

//    });

//   firebase.initializeApp({
//     apiKey: "AIzaSyBvBDRhTbx1tuJ46YTrBGO3p08Lgg0xQ_4",
//     authDomain: "fir-portfolio-f958a.firebaseapp.com",
//     projectId: "fir-portfolio-f958a",
//     storageBucket: "fir-portfolio-f958a.appspot.com",
//     messagingSenderId: "456855860948",
//     appId: "1:456855860948:web:705a9866a38cd95ad66d41",
//     measurementId: "G-48VE6V1CRF"
//   });
  
// const app = initializeApp(firebaseConfig)
// const auth = firebase.auth();
// const firestore = firebase.firestore();

// function App() {

//     const [user] = useAuthState(auth);

//     return (
//         <div className='App'>
//             <header className='App-Header'>

//             </header>

//             <section >
//               {user ? <ChatRoom /> : <SignIn />}
//             </section>
//         </div>
//     );
// }

// function SignIn() {

//     return(
//         <button onClick={signInWithGoogle}>Sign in with Google</button>
//     )

// }
// function SignOut() {

//     return (auth.currentUser && (

//         <button onClick={() => auth.signOut()}>Sign Out</button>
//       )
//     )
// }

// function ChatRoom() {

//     const dummy = useRef();

//     const messageRef= firestore.collection('messages');
//     const query = messageRef.orderBy('createdArt').limit(25);

//     const [messages] = useCollectionData(query, {idField: 'id'});

//     const [formValue, setFormValue] = useState('')

//     const sendMessage = async(e) => {
        
//         e.preventDefault();
//         const { uid, photoUrl } = auth.currentUser;
        
//         await messageRef.add({
//             text: formValue,
//             createdAt: firebase.firstore.FieldValue.serverTimestamp(),
//             uid,
//             photoUrl,
//         })

//         setFormValue('');

//         dummy.current.scrollIntoView({ behaviour: 'smooth'})

//     }

//     return (
//         <>
//             <main>
//                 {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}

//                 <div ref={dummy}></div>

//             </main>

//             <form onSubmit={sendMessage}>
//             <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>

//             <button type='submit'>👌🏼</button>
//             </form>
//         </>
//     )
// }

// function ChatMessage(props) {
//     const {text, uid} = props.message;
    
//     const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//     return (
//     <div className={`message ${messageClass}`}>
//         <img src={photoUrl}/>
//         <p>{text}</p>
//     </div>
//     )
// }
