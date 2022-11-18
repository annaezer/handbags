import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import Tile from "./components/Tile";
import our_story from "./assets/our_story.png";
import brand from "./assets/brand.png";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    type="button"
                    buttonText="to the collection"
                    disabled={false}
                />
                <Button
                    type="button"
                    buttonText="shop all bags"
                    disabled={false}
                />
                <Button
                    type="button"
                    buttonText="pre-orders"
                    disabled={true}
                />
            </nav>
            <main>
                <Product
                    label="Best seller"
                    image={bag_1}
                    description="The handy bag"
                    price="€400,-"
                />
                <Product
                    label="Best seller"
                    image={bag_2}
                    description="The stylish bag"
                    price="€250,-"
                />
                <Product
                    label="New collection"
                    image={bag_3}
                    description="The simple bag"
                    price="€300,-"
                />
                <Product
                    label="New collection"
                    image={bag_4}
                    description="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                <Tile>
                    <h2>The brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eaque et fugiat necessitatibus,
                        nesciunt saepe? Earum eveniet explicabo nam non.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eaque et fugiat necessitatibus,
                        nesciunt saepe? Earum eveniet explicabo nam non.</p>
                </Tile>
                <Tile>
                    <img src={brand} alt="brand"/>
                </Tile>
                <Tile>
                    <img src={our_story} alt="our story"/>
                </Tile>
                <Tile>
                    <h2>Our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda beatae commodi
                        cupiditate deleniti dolorem eligendi eum fuga id incidunt inventore ipsa quas quasi quo quos
                        repudiandae, ut vitae voluptates.</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



