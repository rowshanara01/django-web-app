import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Shield, Lock, User as UserIcon, Mail, KeyRound, AlertCircle, CheckCircle2, RefreshCw } from 'lucide-react';

export const AuthPage: React.FC = () => {
  const { 
    login, 
    registerUser, 
    resetPassword, 
    setupSuperAdminOnce, 
    isSuperAdminInitialized, 
    resetSuperAdminStateForDemo,
    setCurrentRoute,
    allUsers
  } = useStore();

  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'forgot' | 'admin-setup'>('login');

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register form state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [regError, setRegError] = useState('');

  // Reset password state
  const [resetEmail, setResetEmail] = useState('');
  const [resetNewPassword, setResetNewPassword] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState('');

  // Superadmin 1-time setup state
  const [adminName, setAdminName] = useState('Master Administrator');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = login(loginEmail, loginPassword);
    if (res.success) {
      setCurrentRoute('home');
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegError('');

    if (regPassword !== regConfirmPassword) {
      setRegError('Passwords do not match.');
      return;
    }

    if (regPassword.length < 6) {
      setRegError('Password must be at least 6 characters.');
      return;
    }

    const res = registerUser(regName, regEmail, regPassword);
    if (res.success) {
      setCurrentRoute('user-dashboard');
    } else {
      setRegError(res.message);
    }
  };

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResetError('');
    if (!resetEmail || !resetNewPassword) {
      setResetError('Please fill out all fields.');
      return;
    }
    if (resetNewPassword.length < 6) {
      setResetError('New password must be at least 6 characters.');
      return;
    }
    const res = resetPassword(resetEmail, resetNewPassword);
    if (res.success) {
      setResetSuccess(true);
    } else {
      setResetError(res.message);
    }
  };

  const handleAdminSetupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminError('');
    if (!adminEmail || !adminPassword || !adminName) {
      setAdminError('All fields are required.');
      return;
    }
    const res = setupSuperAdminOnce(adminName, adminEmail, adminPassword);
    if (res.success) {
      setCurrentRoute('admin-dashboard');
    } else {
      setAdminError(res.message);
    }
  };

  const currentAdminUser = allUsers.find((u) => u.role === 'admin');

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      
      {/* Brand header */}
      <div className="text-center space-y-2 mb-8">
        <div className="w-10 h-10 rounded-lg bg-slate-950 text-white font-black text-sm flex items-center justify-center mx-auto">
          NX
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          NexStore Authentication
        </h1>
        <p className="text-xs text-slate-500">
          Secure customer access and store administration.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-6 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('login')}
          className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
            activeTab === 'login'
              ? 'border-slate-950 text-slate-950'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => setActiveTab('register')}
          className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
            activeTab === 'register'
              ? 'border-slate-950 text-slate-950'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Register (User)
        </button>
        <button
          onClick={() => setActiveTab('forgot')}
          className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
            activeTab === 'forgot'
              ? 'border-slate-950 text-slate-950'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Reset Password
        </button>
        <button
          onClick={() => setActiveTab('admin-setup')}
          className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
            activeTab === 'admin-setup'
              ? 'border-indigo-600 text-indigo-700 font-bold'
              : 'border-transparent text-slate-500 hover:text-indigo-600'
          }`}
        >
          1-Time Admin
        </button>
      </div>

      {/* TAB 1: LOGIN */}
      {activeTab === 'login' && (
        <form onSubmit={handleLoginSubmit} className="space-y-4 bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-medium text-slate-700">
                Password
              </label>
              <button
                type="button"
                onClick={() => setActiveTab('forgot')}
                className="text-[11px] text-slate-500 hover:text-slate-950"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
          >
            Sign In to Account
          </button>

          <div className="pt-4 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">
              Don't have an account yet?{' '}
              <button
                type="button"
                onClick={() => setActiveTab('register')}
                className="font-bold text-slate-950 hover:underline"
              >
                Create an account
              </button>
            </p>
          </div>
        </form>
      )}

      {/* TAB 2: REGISTER (Strictly Customer Role - No Admin Allowed) */}
      {activeTab === 'register' && (
        <form onSubmit={handleRegisterSubmit} className="space-y-4 bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
          
          {/* Security Rule Banner */}
          <div className="p-3 bg-amber-50/80 border border-amber-200/80 rounded-lg flex items-start gap-2.5 text-xs text-amber-900">
            <Shield className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold">Strict Role Policy</strong>
              <span>Public accounts are registered strictly with Customer role. Admin accounts cannot be created here.</span>
            </div>
          </div>

          {regError && (
            <div className="p-2.5 bg-rose-50 border border-rose-200 rounded text-xs text-rose-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{regError}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <UserIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="e.g. Tanvir Hasan"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="tanvir@example.com"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Password <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="At least 6 characters"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Confirm Password <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="Re-enter password"
                value={regConfirmPassword}
                onChange={(e) => setRegConfirmPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
          >
            Create Customer Account
          </button>
        </form>
      )}

      {/* TAB 3: PASSWORD RESET */}
      {activeTab === 'forgot' && (
        <form onSubmit={handleResetSubmit} className="space-y-4 bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Reset Account Password</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Enter your registered email address and choose a new secure password.
            </p>
          </div>

          {resetSuccess ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <p className="text-xs font-bold text-emerald-900">Password Updated Successfully!</p>
              <p className="text-[11px] text-emerald-700">
                You can now log in using your new password.
              </p>
              <button
                type="button"
                onClick={() => {
                  setResetSuccess(false);
                  setActiveTab('login');
                }}
                className="mt-2 px-4 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded text-xs font-semibold"
              >
                Proceed to Sign In
              </button>
            </div>
          ) : (
            <>
              {resetError && (
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded text-xs text-rose-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{resetError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Registered Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="e.g. customer@nexstore.dev"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="New password (min 6 characters)"
                    value={resetNewPassword}
                    onChange={(e) => setResetNewPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Reset Password
              </button>
            </>
          )}
        </form>
      )}

      {/* TAB 4: ONE-TIME SUPERADMIN INITIALIZATION */}
      {activeTab === 'admin-setup' && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-600" />
            <div>
              <h3 className="text-sm font-bold text-slate-900">Master Superadmin Setup</h3>
              <p className="text-[11px] text-slate-500">
                Administrative credentials can strictly be initialized only once for platform security.
              </p>
            </div>
          </div>

          {isSuperAdminInitialized ? (
            /* LOCKED STATE */
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>Superadmin Initialized & Permanently Locked</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                As specified by security policy, superadmin credentials can only be initialized once. The system has already locked this capability to protect administrative sovereignty.
              </p>
              
              <div className="p-3 bg-white border border-slate-200 rounded text-xs space-y-1">
                <span className="text-[11px] text-slate-400 font-semibold uppercase">Configured Superadmin:</span>
                <p className="font-bold text-slate-900">{currentAdminUser?.name || 'Super Admin'}</p>
                <p className="text-slate-600 font-mono text-[11px]">{currentAdminUser?.email || 'admin@nexstore.dev'}</p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setLoginEmail(currentAdminUser?.email || 'admin@nexstore.dev');
                    setLoginPassword(currentAdminUser?.password || 'AdminPassword123!');
                    setActiveTab('login');
                  }}
                  className="flex-1 py-2 px-3 bg-slate-950 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Sign In as Admin
                </button>
                <button
                  type="button"
                  onClick={resetSuperAdminStateForDemo}
                  className="py-2 px-3 border border-slate-200 hover:bg-slate-100 text-slate-700 rounded text-xs font-medium flex items-center gap-1 transition-colors"
                  title="Unlock to test 1-time creation form"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Test Setup</span>
                </button>
              </div>
            </div>
          ) : (
            /* UNINITIALIZED STATE: RUN SETUP ONCE */
            <form onSubmit={handleAdminSetupSubmit} className="space-y-4">
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded text-xs text-indigo-900">
                <p className="font-semibold">First-Boot Superuser Creation</p>
                <p className="text-[11px] mt-0.5">
                  Set master email and password once. Once confirmed, this form will be permanently disabled.
                </p>
              </div>

              {adminError && (
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded text-xs text-rose-800">
                  {adminError}
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Admin Name
                </label>
                <input
                  type="text"
                  required
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Master Admin Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="masteradmin@nexstore.dev"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Master Admin Password <span className="text-rose-500">*</span>
                </label>
                <input
                  type="password"
                  required
                  placeholder="Complex master password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
              >
                Initialize & Lock Superadmin
              </button>
            </form>
          )}

        </div>
      )}

    </div>
  );
};
