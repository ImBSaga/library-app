'use client';

export default function LoginPage() {
  return (
    <main>
      <div>
        <h3>Email</h3>
        <input type='email' />
      </div>
      <div>
        <h3>Password</h3>
        <input type='password' />
      </div>
      <button>Submit</button>

      <p>
        Don't have an account? <a href='/register'>Register</a>
      </p>
    </main>
  );
}
