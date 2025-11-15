'use client';

export default function RegisterPage() {
  return (
    <main>
      <div>
        <h3>Name</h3>
        <input type='text' />
      </div>
      <div>
        <h3>Email</h3>
        <input type='email' />
      </div>
      <div>
        <h3>Nomor Handphone</h3>
        <input type='number' />
      </div>
      <div>
        <h3>Password</h3>
        <input type='password' />
      </div>
      <div>
        <h3>Confirm Password</h3>
        <input type='password' />
      </div>
      <button>Submit</button>

      <p>
        Already have an account? <a href='/login'>Login</a>
      </p>
    </main>
  );
}
