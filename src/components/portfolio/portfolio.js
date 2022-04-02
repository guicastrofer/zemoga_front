import React from 'react'

    const Portfolio = ({ portfolio }) => {
      return (
        <div>
          <left><h15>Portfolio List</h15></left>
          {portfolio.map((portfolio) => (
            <div class="card">
              <div class="card-body">
                <h10 class="card-title">{portfolio.description}</h10>
                <h10 class="card-subtitle">{portfolio.experienceSummary}</h10>
                <p class="card-text">{portfolio.lastNames}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Portfolio