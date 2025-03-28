import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="p-3 border-b border-gray-700 bg-gray-800 text-white">
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center gap-3">
          {/* Avatar with Online Indicator */}
          <div className="relative">
            <div className="w-10 h-10 rounded-full border-2 border-gray-500 shadow-md overflow-hidden">
              <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
            </div>
            {isOnline && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></span>
            )}
          </div>

          {/* User Details */}
          <div>
            <h3 className="text-lg font-semibold">{selectedUser.fullName}</h3>
            <p className={`text-sm ${isOnline ? "text-green-400" : "text-gray-400"}`}>
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setSelectedUser(null)}
          className="p-2 rounded-full hover:bg-gray-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
