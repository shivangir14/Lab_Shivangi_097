import React from 'react';
function Home() {
    return (
        <div>
          <h2>Welcome to the Home Page</h2>
          <p>This is a protected page accessible after login.</p>
          <div className="carousel">
            {/* Image cards that rotate like a carousel */}
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="card">
                <img src={`https://via.placeholder.com/150?text=Card+${num}`} alt={`Card ${num}`} />
              </div>
            ))}
          </div>
        </div>
      );
}
export default Home;




