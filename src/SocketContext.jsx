/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

export function useSocket() {
	return useContext(SocketContext);
}

export function SocketProvider({ children }) {
	const socket = io("https://menu-didactico.up.railway.app");

	useEffect(() => {
		return () => {
			socket.disconnect();
		};
	}, []);

	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
}
