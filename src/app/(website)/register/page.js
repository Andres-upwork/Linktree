'use client'

import { RegisterFrom } from "./form";


export default function RegisterPage() {
    return (
        <>
            <div className="p-4 max-w-xs mx-auto">
                <h1 className="text-4xl font-bold text-center mb-2">
                    S&apos;Inscrire
                </h1>
                <p className="text-center mb-6 text-gray-500">
                Connectez-vous à votre compte en utilisant l&apos;une des méthodes suivantes
                </p>
            
                <div className="text-center mb-6">
                    <RegisterFrom/>
                </div>
            </div>
        </>
    );
}



// 'use client'

// import LoginWithGoogle from "../../components/Buttons/LoginWithGoogle";


// export default function LoginPage() {
//     return (
//         <div>
//             <div className="p-4 max-w-xs mx-auto">
//             <h1 className="text-4xl font-bold text-center mb-2">
//                 S&apos;Inscrire
//             </h1>
//             <p className="text-center mb-6 text-gray-500">
//             Connectez-vous à votre compte en utilisant l&apos;une des méthodes suivantes
//             </p>
//             <LoginWithGoogle />
//             </div>
//             <div>
//             <div class="form-container">
//         <h2>Login</h2>
//         <form action="/login" method="post">
//           <div class="form-group">
//             <label for="name">Name:</label>
//             <input type="text" id="name" name="username" placeholder="Enter your name" required autocomplete="off"></input>
//           </div>
//           <div class="form-group">
//             <label for="password">password:</label>
//             <input type="password" id="password" name="password" placeholder="password" required></input>
//           </div>
//           <button type="submit" class="submit-btn">Login</button>
//         </form>
//         <p>Dont have an account? <a class="link" href="/signup">SignUp</a></p>
//       </div>
//             </div>
//         </div>
//     );
// }

