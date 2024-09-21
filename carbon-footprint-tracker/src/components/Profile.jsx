import React, { useState } from 'react';

function Profile({ onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="text-white cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <i className="fas fa-user-circle fa-2x"></i> {/* FontAwesome icon for profile */}
      </div>
      {open && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg">
          <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={onLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
