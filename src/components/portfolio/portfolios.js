import React from 'react'

    const Portfolios = ({ portfolios }) => {
      return (
        <div>
          <left><h15>Portfolio List</h15></left>
          {portfolios.map((portfolios) => (
            <div class="card">
              <div class="card-body">
                <h10 class="card-title">{portfolios.description}</h10>
                <h10 class="card-subtitle">{portfolios.experienceSummary}</h10>
                <p class="card-text">{portfolios.lastNames}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Portfolios