import React from 'react'
import LuckyNumbers from './components/LuckyNumbers'

import './index.css'

export default function App() {
    return (
        <div >
            <h1>Lotto 6 / 49</h1>
            <h6>Generating lucky numbers</h6>
            <LuckyNumbers />
        </div>
    );
}
