import React from "react";

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, avatarUrl }) => {
  return (
    <div className="w-full max-w-xs bg-white shadow-md p-3 flex items-center gap-4 dark:bg-slate-900 dark:border-slate-700 hover:shadow-lg transition duration-300">
      <img
        src={avatarUrl}
        alt={name}
        className="w-13 h-13 rounded-full object-cover border-2 border-orange-500"
      />
      <div>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-white">{name}</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
