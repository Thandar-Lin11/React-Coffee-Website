const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <div className="blog__container container">
        <h2 className="section__title">
          Our blogs coffee with <br />
          insightful topic
        </h2>

        <div className="blog__content grid">
          <article className="blog__card">
            <div className="blog__image">
              <img src="./media/blog1.jpg" alt="" className="blog__img" />
              <a href="#" className="blog__button">
                <i className="bx bx-right-arrow-alt"></i>
              </a>
              <div className="blog__stats">
                <div className="blog__reaction">
                  <i className="bx bx-comment"></i>
                  <span>12</span>
                </div>
                <div className="blog__reaction">
                  <i className="bx bx-show"></i>
                  <span>76,5k</span>
                </div>
              </div>
            </div>

            <div className="blog__data">
              <h2 className="blog__title">How to grow coffee beans?</h2>
              <ul className="blog__ul">
                <li>
                  <b>Choose the Right Location:</b> Coffee plants thrive in
                  tropical regions with temperatures between 60°F to 70°F (15°C
                  to 24°C). Select a spot with partial shade and protection from
                  strong winds.
                </li>
                <li>
                  <b>Select the Coffee Variety:</b> There are different coffee
                  varieties, such as Arabica and Robusta. Arabica is more
                  delicate and flavorful but requires milder temperatures, while
                  Robusta is hardier and more resistant to pests.
                </li>
                <li className="nav__item">
                  <b>Prepare the Soil:</b> Coffee plants prefer well-draining,
                  fertile soil with a slightly acidic pH (around 6.0). Add
                  organic matter like compost to improve soil fertility.
                </li>
                <li className="nav__item">
                  <b>Planting Coffee Seeds:</b> Coffee beans are typically
                  planted in nursery beds or pots. Plant the seeds about 1 inch
                  deep and water them regularly. Seedlings should sprout in 6 to
                  8 weeks.
                </li>
                <li>
                  <b>Transplanting Seedlings:</b> Once the seedlings have grown
                  a few pairs of leaves, transplant them into their permanent
                  location. Space the plants about 6 to 8 feet apart.
                </li>
                <li>
                  <b>Provide Adequate Water:</b> Coffee plants need consistent
                  moisture but should not be waterlogged. Water the plants
                  regularly, especially during dry spells.
                </li>
                <li>
                  <b>Pruning and Shaping:</b> Prune the coffee plants to promote
                  proper growth and shape. Remove any dead or diseased branches.
                </li>
                <li>
                  <b>Fertilization:</b> Coffee plants require regular
                  fertilization with a balanced fertilizer. Use organic
                  fertilizers to improve soil nutrients.
                </li>
                <li>
                  <b>Pest and Disease Management:</b> Monitor your plants
                  regularly for pests and diseases. Use organic or natural
                  methods to control pests, and remove affected leaves to
                  prevent the spread of diseases.
                </li>
                <li>
                  <b>Harvesting Coffee Cherries:</b> Coffee cherries ripen at
                  different times. Harvest only the ripe, red cherries by hand.
                  This is a labor-intensive process and may take several rounds
                  of picking.
                </li>
                <li>
                  <b>Processing Coffee Cherries:</b> Once harvested, process the
                  coffee cherries to remove the outer fruit layers. There are
                  different methods like dry processing (natural) or wet
                  processing (washed).
                </li>
                <li>
                  <b>Drying the Beans:</b> After processing, dry the coffee
                  beans in the sun until their moisture content is reduced to
                  the desired level.
                </li>
                <li>
                  <b>Roasting the Beans:</b> Roast the dried coffee beans to
                  your preferred level of darkness to bring out the rich flavors
                  and aromas.
                </li>
                <li>
                  <b>Enjoy Your Homegrown Coffee:</b> Grind the freshly roasted
                  beans and brew your own delicious cup of coffee!
                </li>
              </ul>
            </div>
          </article>
          <article className="blog__card">
            <div className="blog__image">
              <img src="./media/blog2.jpg" alt="" className="blog__img" />
              <a href="#" className="blog__button">
                <i className="bx bx-right-arrow-alt"></i>
              </a>
              <div className="blog__stats">
                <div className="blog__reaction">
                  <i className="bx bx-comment"></i>
                  <span>96</span>
                </div>
                <div className="blog__reaction">
                  <i className="bx bx-show"></i>
                  <span>356,7k</span>
                </div>
              </div>
            </div>

            <div className="blog__data">
              <h2 className="blog__title">How to make coffee for beginner?</h2>
              <p>
                <b>
                  {" "}
                  Making coffee for beginners is a simple and enjoyable process.{" "}
                </b>
                Here's a step-by-step guide on how to make coffee using ground
                coffee beans:
              </p>
              <ul className="blog__ul">
                <li>
                  <b>Ingredients and Equipment:</b>
                </li>
                <ul className="blog__ul">
                  <li>Freshly ground coffee beans (medium grind)</li>
                  <li>Filter or coffee maker (paper or metal mesh)</li>
                  <li>Coffee mug</li>
                  <li>Fresh, cold water</li>
                  <li>Kettle or pot for boiling water</li>
                  <li>Spoon</li>
                  <li>
                    Optional: milk, sugar, or any other preferred additives
                  </li>
                </ul>
                <li>Instructions:</li>
                <ul className="blog__ul">
                  <li>
                    <b>Measure the Coffee:</b> For a standard cup of coffee, use
                    1 to 2 tablespoons of ground coffee per 6 ounces of water.
                    You can adjust the amount to your preference for stronger or
                    milder coffee.
                  </li>
                  <li>
                    <b>Boil Water:</b> Fill your kettle or pot with fresh, cold
                    water and bring it to a boil. If you have a
                    temperature-controlled kettle, aim for water around 200°F
                    (93°C), just below boiling point.
                  </li>
                  <li>
                    <b>Prepare the Coffee Maker:</b> If you're using a coffee
                    maker with a paper filter, place the filter in the brew
                    basket and rinse it with hot water to remove any paper
                    taste. If you have a metal mesh filter, make sure it's
                    clean.
                  </li>
                  <li>
                    <b>Add Coffee Grounds:</b> Put the measured coffee grounds
                    into the coffee maker's filter.
                  </li>
                  <li>
                    <b>Brew the Coffee:</b> Pour the hot water over the coffee
                    grounds in the filter, allowing it to drip through into the
                    coffee pot or your mug below. If using a French press, pour
                    the hot water directly over the coffee grounds in the press.
                  </li>
                  <li>
                    <b>Steep (for French Press):</b> If using a French press,
                    stir the coffee grounds with a spoon, then place the plunger
                    on top without pressing down. Let the coffee steep for about
                    4 minutes.
                  </li>
                  <li>
                    <b>Press (for French Press):</b> After 4 minutes, press down
                    the plunger slowly to separate the coffee grounds from the
                    liquid.
                  </li>
                  <li>
                    <b>Add Milk and Sugar (Optional):</b> If desired, add milk,
                    cream, sugar, or any other preferred additives to your
                    coffee.
                  </li>
                  <li>
                    <b>Stir and Enjoy:</b> Give your coffee a gentle stir to mix
                    in any additions and enjoy your freshly brewed cup of
                    coffee!
                  </li>
                </ul>
                <li>
                  <b>Tips:</b>
                </li>
                <ul>
                  <li>
                    Use high-quality, freshly ground coffee for the best flavor.
                  </li>
                  <li>
                    Experiment with different coffee-to-water ratios and brewing
                    times to find your preferred taste.
                  </li>
                  <li>
                    If using a drip coffee maker, make sure to clean it
                    regularly to avoid any buildup that could affect the taste
                    of your coffee.
                  </li>
                </ul>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;
