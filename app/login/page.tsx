"use client"
export default function Login() {
  return (
    <div className="auth-page">
      <form className="auth-card">
        <h2> สมัครสมาชิก </h2>

        <input
        placeholder="Name"
        type="text"
        />
        <input
        placeholder="Password"
        type="password"
        />
        
        <button>Login</button>

      </form>
      
    
    </div>
  );
}