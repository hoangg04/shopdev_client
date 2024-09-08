import { useState, useEffect } from "react";

function useWindow() {
	const [windowWidth, setWindowWidth] = useState<number | undefined>(() => {
		if (typeof window !== "undefined") {
			return window.innerWidth;
		}
	});

	useEffect(() => {
		// Function to update state with current window width
		const handleResize = () => {
			if (windowWidth) {
				setWindowWidth(window.innerWidth);
			}
		};

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return windowWidth;
}

export default useWindow;
