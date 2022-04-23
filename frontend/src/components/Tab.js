import { useState } from "react";
import Table from '../components/Table'
import PieChart from '../components/PieChart'

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const ToggleTab = (index)=> {
        setToggleState(index)
    }

    return (
        <section className="section">
            <div className="title">
                <h2>Massive Bioinformatics</h2>
                <div className="underline"></div>
            </div>
        <div className="tab-center">
            <div className="btn-container">
                <button className= {toggleState===1 ? "tab-btn active-btn" : "tab-btn"}
                onClick= {()=>ToggleTab(1)}
                >TABLE</button>
                <button className= {toggleState===2 ? "tab-btn active-btn" : "tab-btn"}
                onClick= {()=>ToggleTab(2)}
                >PIE CHART</button>
            </div>
            <article className="job-info">
                <div className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <Table/>
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <PieChart/>
                </div>
            </article>
        </div>
        </section>
    )
}

export default Tabs