/* 
            *-------------------------*
               INiTIAL INSTALLATION
            *-------------------------`*

    * 1. visit console.firebase.google.com
    * 2. crete project (skip google analytics)
    * 3. register app( create config)
    * 4. install firebase: npm install firebase 
    * 5. add config file t your projects
    * 6. DANGER: Do not publish or make firebase config to public by pushing those to github. 
    *
            *--------------------*
                INTEGRATION
            *--------------------*

    * 7. visit: Go to Docs > Build > Authentication > Web > Get started
    * 8. export app from the firebase.inti.js file: export default app
    * 9. Login.jsx: import getAuth from firebase/auth
    * 10. create const auth = getAuth(app)
    
            *--------------------*
               PROVIDER SETUP
            *--------------------*

    * 11. import googleAuthProvider and crete a new providers
    * 12. use signInWithPopup and pass auth and provider
    * 13. activate sign-in method (google, facebook, github, etc.)
    * [vite]: change 127.0.0.1 to localhost 
    * 
            *--------------------*
                    MORE
            *--------------------*
    * 1. activate the auth provider (create app, provide redirect url, clint id, clint secret)       
*/