/* eslint-disable prettier/prettier */
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return(
        <footer className="bg-gray-900 text-white py-4 text-center mt-3">
        <div className="container mx-auto">
          <p>&copy; {currentYear} Numerical Solution by Group-07. All rights reserved.</p>
        </div>
      </footer>
     );
  }
  