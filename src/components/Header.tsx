import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Feather, Search, Wallet } from 'lucide-react';

const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [connectionError, setConnectionError] = useState<string | null>(null);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window as any;
      if (!ethereum) {
        setConnectionError("Please install MetaMask to connect your wallet.");
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length !== 0) {
        setWalletAddress(accounts[0]);
      }
    } catch (error) {
      console.error("Error checking if wallet is connected:", error);
      setConnectionError("An error occurred while checking your wallet connection.");
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window as any;
      if (!ethereum) {
        setConnectionError("Please install MetaMask to connect your wallet.");
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
      setConnectionError(null);
    } catch (error: any) {
      console.error("Error connecting wallet:", error);
      if (error.code === 4001) {
        setConnectionError("You rejected the connection request. Please try again.");
      } else {
        setConnectionError("An error occurred while connecting your wallet. Please try again.");
      }
    }
  };

  return (
    <header className="bg-white bg-opacity-70 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-purple-700 hover:text-purple-500 transition-colors duration-300">
          <Feather size={24} />
          <span className="text-xl font-semibold">Idealist Garden</span>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex space-x-6">
          {['Persona Discovery', 'Creative Hub', 'Blog Garden'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-purple-700 hover:text-purple-500 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className={`relative transition-all duration-300 ${isSearchFocused ? 'w-48' : 'w-40'}`}>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-8 pr-2 py-1 rounded-full bg-purple-100 border border-purple-300 focus:outline-none focus:border-purple-500 text-purple-700 placeholder-purple-400"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <Search size={18} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-purple-400" />
          </div>

          {/* MetaMask Wallet Connection */}
          {walletAddress ? (
            <div className="flex items-center space-x-2 text-purple-700">
              <Wallet size={18} className="text-purple-500" />
              <span className="text-sm">{`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}</span>
            </div>
          ) : (
            <button onClick={connectWallet} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
              <Wallet size={18} className="inline mr-2" />
              Connect Wallet
            </button>
          )}

          {/* Login Button (placeholder for now) */}
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">Login</button>
        </div>
      </div>
      {connectionError && (
        <div className="bg-red-500 text-white text-center py-2 px-4">
          {connectionError}
        </div>
      )}
    </header>
  );
};

export default Header;