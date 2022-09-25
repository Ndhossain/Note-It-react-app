import React from 'react';
import Row from 'react-bootstrap/Row';
import speacialfeature1 from '../../../assets/images/speacialfeature1.png';
import speacialfeature2 from '../../../assets/images/speacialfeature2.png';
import Cards from './Card';

function SpeacialFeatures() {
    return (
        <section className="mt-5">
            <Row xs={1} md={2} className="g-4">
                <Cards
                    image={speacialfeature2}
                    title="Write like no one's watching"
                    descriptiton="End-to-end encryption protects your notes and files and keeps them securely synced across all your devices. No one but you can read your data—not even us."
                />
                <Cards
                    image={speacialfeature1}
                    title="Your data is yours"
                    descriptiton="Maintain an offline copy of your notes on your device at all times, plus automated backups including an encrypted backup emailed nightly."
                />
            </Row>
        </section>
    );
}

export default SpeacialFeatures;
