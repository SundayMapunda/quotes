import React from 'react'

function Categories() {
    const styleCard = {
                width: '48%'
            }
      
    function peek(){
        alert('Under Maintenance.')
    }
    function peekBreak(){
        alert('Still Under Maintenance.')
    }
    function peekMotives(){
        alert('Told You It Is Under Maintenance.')
    }
    function peekBirthday(){
        alert('Oh! I See You have Trust Issues, Welcome To The Club.')
    }
        
  return (
    <div>
        <h3>Categories</h3>
        <div className="d-flex justify-content-between mb-3">
            <div className="card border-0 bg-warning shadow" style={styleCard} onClick={peek}>
                <div className="card-body d-flex">
                    <h3>Happy</h3>
                </div>
            </div>
            <div className="card border-0 bg-info shadow" style={styleCard} onClick={peekBreak}>
                <div className="card-body d-flex">
                    <h3>Break Up</h3>
                </div>
            </div>
        </div>

        <div className="d-flex justify-content-between mb-3">
            <div className="card bg-secondary border-0 shadow" style={styleCard} onClick={peekMotives}>
                <div className="card-body d-flex">
                    <h3>Motivations</h3>
                </div>
            </div>
            <div className="card border-0 bg-success shadow" style={styleCard} onClick={peekBirthday}>
                <div className="card-body d-flex">
                    <h3>Birthday</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories