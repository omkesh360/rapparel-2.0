import Card4 from "./Card4";
import Card3 from "./Card3";
import Card2 from "./Card2";
import Card1 from "./Card1";
import Card from "./Card";
import PropTypes from "prop-types";
import styles from "./ShopVariant.module.css";

const ShopVariant = ({ className = "" }) => {
  return (
    <div className={[styles.shopvariant2, className].join(" ")}>
      <div className={styles.leftOutline} />
      <div className={styles.leftOutline1} />
      <section className={styles.main}>
        <div className={styles.navigation}>
          <h2 className={styles.rapparel}>RAPPAREL</h2>
          <div className={styles.searchWrapper}>
            <div className={styles.search}>
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <input
                className={styles.label}
                placeholder="Search products..."
                type="text"
              />
            </div>
          </div>
          <div className={styles.navigationInner}>
            <div className={styles.categoriesParent}>
              <div className={styles.categories}>Categories</div>
              <div className={styles.categoriesIcons}>
                <img
                  className={styles.categoryIcons}
                  alt=""
                  src="/category-icons.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.groupWrapper}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group.svg"
              />
            </div>
            <img
              className={styles.bagPlusIcon}
              loading="lazy"
              alt=""
              src="/bagplus.svg"
            />
            <div className={styles.groupContainer}>
              <img
                className={styles.groupIcon1}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.headerContentParent}>
          <div className={styles.headerContent}>
            <div className={styles.headerWithImage}>
              <div className={styles.copy}>
                <h1
                  className={styles.bestCloths}
                >{`Best Cloths & brands in our store`}</h1>
                <div className={styles.bestProductsFactory}>
                  Best Products ,Factory Prices , Excellent Services .
                </div>
                <div className={styles.buttonWrapper}>
                  <button className={styles.button}>
                    <div className={styles.explore}>Explore</div>
                  </button>
                </div>
              </div>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className={styles.vectorIcon1}
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className={styles.latestCollectionParent}>
            <h1 className={styles.latestCollection}>Latest Collection</h1>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <div className={styles.image}>
                  <div className={styles.imageChild} />
                  <div className={styles.button1}>
                    <div className={styles.buy}>BUY</div>
                  </div>
                  <img
                    className={styles.vectorIcon2}
                    loading="lazy"
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
                <div className={styles.copy1}>
                  <div className={styles.mensFormal}>Men’s Formal</div>
                </div>
              </div>
              <Card4 menswear="Menswear" />
              <Card3 womenswear="Womenswear" />
              <Card4
                menswear="Women’s top"
                propFlex="1"
                propMinWidth="80px"
                propWidth="unset"
              />
              <Card2 />
              <div className={styles.card1}>
                <div className={styles.image1}>
                  <div className={styles.imageItem} />
                  <div className={styles.buttonContainer}>
                    <div className={styles.button2}>
                      <div className={styles.buy1}>BUY</div>
                    </div>
                  </div>
                  <img
                    className={styles.vectorIcon3}
                    loading="lazy"
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
                <div className={styles.copy2}>
                  <div className={styles.kids}>Kids</div>
                </div>
              </div>
            </div>
            <img className={styles.frameChild} alt="" src="/rectangle-13.svg" />
            <img className={styles.frameItem} alt="" src="/group-21.svg" />
            <div className={styles.categoriesContainer}>
              <div className={styles.categoriesHeader}>
                <div className={styles.categoriesWrapper}>
                  <h1 className={styles.categories1}>Categories</h1>
                </div>
                <img
                  className={styles.categoriesHeaderChild}
                  loading="lazy"
                  alt=""
                  src="/group-20.svg"
                />
              </div>
              <div className={styles.cardGridTwoContainer}>
                <div className={styles.cardGrid1}>
                  <Card1 mensFormal="Men’s Formal" />
                  <Card4
                    menswear="Menswear"
                    propFlex="unset"
                    propMinWidth="unset"
                    propWidth="200px"
                  />
                  <Card3
                    womenswear="Womenswear"
                    propFlex="unset"
                    propMinWidth="unset"
                    propWidth="200px"
                  />
                  <Card1
                    mensFormal="Women’s top"
                    propGap="11px"
                    propOverflow="hidden"
                  />
                  <Card2
                    propFlex="unset"
                    propMinWidth="unset"
                    propWidth="200px"
                  />
                  <Card3
                    womenswear="Kids"
                    propFlex="1"
                    propMinWidth="90px"
                    propWidth="unset"
                  />
                </div>
              </div>
              <div className={styles.brandsContainer}>
                <div className={styles.brandsHeader}>
                  <h1 className={styles.shopByBrands}>Shop by Brands</h1>
                  <img
                    className={styles.brandsHeaderChild}
                    loading="lazy"
                    alt=""
                    src="/group-23.svg"
                  />
                </div>
                <div className={styles.brandImages}>
                  <div className={styles.rectangleParent}>
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/rectangle-28@2x.png"
                    />
                    <img
                      className={styles.rectangleIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-29@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.trendingContainer}>
                <div className={styles.trendingContent}>
                  <div className={styles.trendingGrid}>
                    <div className={styles.trendingHimHeaderParent}>
                      <div className={styles.trendingHimHeader}>
                        <img
                          className={styles.trendingHimDivider}
                          loading="lazy"
                          alt=""
                          src="/rectangle-30@2x.png"
                        />
                        <h1 className={styles.trendingForHim}>
                          #Trending for him
                        </h1>
                      </div>
                      <div className={styles.trendingHimThumbs}>
                        <img
                          className={styles.thumbnailIcon}
                          loading="lazy"
                          alt=""
                          src="/thumbnail@2x.png"
                        />
                        <div className={styles.card2}>
                          <img
                            className={styles.thumbnailIcon1}
                            loading="lazy"
                            alt=""
                            src="/thumbnail-1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.trendingHerDividerParent}>
                      <img
                        className={styles.trendingHerDivider}
                        loading="lazy"
                        alt=""
                        src="/rectangle-31@2x.png"
                      />
                      <div className={styles.trendingHerImages}>
                        <div className={styles.vectorParent}>
                          <img
                            className={styles.vectorIcon4}
                            loading="lazy"
                            alt=""
                            src="/vector-5.svg"
                          />
                          <img
                            className={styles.vectorIcon5}
                            loading="lazy"
                            alt=""
                            src="/vector-6.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.trendingHerThumbs}>
                        <div className={styles.herThumbOne}>
                          <div className={styles.herCardOne}>
                            <div className={styles.card3}>
                              <img
                                className={styles.thumbnailIcon2}
                                loading="lazy"
                                alt=""
                                src="/thumbnail-2@2x.png"
                              />
                              <div className={styles.card4}>
                                <img
                                  className={styles.thumbnailIcon3}
                                  alt=""
                                  src="/thumbnail-1@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.card5}>
                            <img
                              className={styles.thumbnailIcon4}
                              loading="lazy"
                              alt=""
                              src="/thumbnail-4@2x.png"
                            />
                            <div className={styles.card6}>
                              <img
                                className={styles.thumbnailIcon5}
                                alt=""
                                src="/thumbnail-1@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.indiContentParent}>
                    <div className={styles.indiContent}>
                      <div className={styles.indiHeader}>
                        <h1 className={styles.indiFinds}>#Indi finds</h1>
                        <img
                          className={styles.indiHeaderChild}
                          loading="lazy"
                          alt=""
                          src="/group-22.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.trendingHimGrid}>
                      <div className={styles.trendingHimImages}>
                        <img
                          className={styles.thumbnailIcon6}
                          loading="lazy"
                          alt=""
                          src="/thumbnail-6@2x.png"
                        />
                      </div>
                      <img
                        className={styles.thumbnailIcon7}
                        loading="lazy"
                        alt=""
                        src="/thumbnail-7@2x.png"
                      />
                      <div className={styles.trendingHimImages1}>
                        <img
                          className={styles.thumbnailIcon8}
                          loading="lazy"
                          alt=""
                          src="/thumbnail-8@2x.png"
                        />
                      </div>
                      <div className={styles.card7}>
                        <img
                          className={styles.thumbnailIcon9}
                          loading="lazy"
                          alt=""
                          src="/thumbnail-9@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productHighlights}>
            <div className={styles.productHighlightsGrid}>
              <img
                className={styles.productHighlightsGridChild}
                alt=""
                src="/rectangle-14.svg"
              />
              <div className={styles.cardGrid2}>
                <div className={styles.card8}>
                  <div className={styles.image2}>
                    <img
                      className={styles.plusCircleFillIcon}
                      loading="lazy"
                      alt=""
                      src="/pluscircle-fill.svg"
                    />
                    <button className={styles.button3}>
                      <div className={styles.buy2}>BUY</div>
                    </button>
                  </div>
                  <div className={styles.copy3}>
                    <div className={styles.product}>{`Product `}</div>
                    <div className={styles.descriptionOfFirst}>
                      Description of first product
                    </div>
                    <div className={styles.productSeparator}>$10.99</div>
                  </div>
                </div>
                <Card descriptionOfSecondProduc="Description of second product" />
                <Card descriptionOfSecondProduc="Description of third product" />
                <div className={styles.card9}>
                  <div className={styles.image3}>
                    <img
                      className={styles.plusCircleFillIcon1}
                      loading="lazy"
                      alt=""
                      src="/pluscircle-fill.svg"
                    />
                    <div className={styles.frameParent}>
                      <div className={styles.buttonFrame}>
                        <button className={styles.button4}>
                          <div className={styles.buy3}>BUY</div>
                        </button>
                      </div>
                      <div className={styles.button5}>
                        <div className={styles.buy4}>BUY</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.copy4}>
                    <div className={styles.product1}>Product</div>
                    <div className={styles.descriptionOfThird}>
                      Description of third product
                    </div>
                    <div className={styles.div}>$10.99</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.navigationFooter}>
        <div className={styles.divider} />
        <div className={styles.footerContent}>
          <div className={styles.apparelLinksParent}>
            <div className={styles.apparelLinks}>
              <h3 className={styles.rapparel1}>RAPPAREL</h3>
            </div>
            <div className={styles.socialIcons}>
              <img
                className={styles.buttonsIcon}
                loading="lazy"
                alt=""
                src="/buttons--icon@2x.png"
              />
              <img
                className={styles.buttonsIcon1}
                loading="lazy"
                alt=""
                src="/buttons--icon-1@2x.png"
              />
              <img
                className={styles.buttonsIcon2}
                loading="lazy"
                alt=""
                src="/buttons--icon-2@2x.png"
              />
              <img
                className={styles.buttonsIcon3}
                loading="lazy"
                alt=""
                src="/buttons--icon-3@2x.png"
              />
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.linkItems}>
              <div className={styles.items1}>
                <div className={styles.shop}>SHOP</div>
                <div className={styles.men}>Men</div>
                <div className={styles.women}>Women</div>
                <div className={styles.kids1}>Kids</div>
              </div>
              <div className={styles.items2}>
                <div className={styles.companyInfo}>COMPANY INFO</div>
                <div className={styles.aboutUs}>About us</div>
                <div className={styles.locations}>Locations</div>
                <div className={styles.store}>Store</div>
              </div>
            </div>
            <div className={styles.items3}>
              <div className={styles.quickLinks}>QUICK LINKS</div>
              <div className={styles.customerService}>Customer Service</div>
              <div className={styles.legalPrivacy}>{`Legal & Privacy`}</div>
              <div className={styles.contact}>Contact</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ShopVariant.propTypes = {
  className: PropTypes.string,
};

export default ShopVariant;
