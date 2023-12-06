import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateProvider } from "../../Utils/StateProvider";
import Product from "../Products/Product";

function SearchResults() {
  const [{ searchProducts, products }] = useStateProvider();
  const [filteredProduct, setFilteredProduct] = useState(null);
  const [duplicateFilter, setduplicateFilter] = useState(null);

  useEffect(() => {
    console.log("show", searchProducts);
    setFilteredProduct(searchProducts);
    setduplicateFilter(searchProducts);
  }, [searchProducts]);

  useEffect(() => {
    console.log(filteredProduct);
  }, [filteredProduct]);


  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="100%">
      <Box display="flex" padding="15px" marginLeft="20px">
        <Typography variant="h5" fontWeight="600" color="black">
          Search results
        </Typography>
        
      </Box>

      <Box display="flex" justifyContent="center">
        <Box
          width="28%"
          sx={{ "@media(max-width:500px)": { display: "none" } }}>
          {/* its wrking but not visible on the screen  */}
          <Typography padding="20px">Filters</Typography>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              Gender
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ul>
                <li value="men" >
                  Men
                </li>
                <li value="women">
                  Women
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              price
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ul>
                <li>Below 100</li>
                <li>Below 500</li>
                <li>Below 750</li>
                <li>Below 1000</li>
                <li>Below 1500</li>
                <li>Below 2000</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            
              sx={{
                color: "black",
              }}>
              Color
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ul>
                <li >Black</li>
                <li >White</li>
                <li >Brown</li>
                <li >Blue</li>
                <li >Green</li>
                <li >Red</li>
                <li >Pink</li>
                <li>Lavender</li>
                <li>Yellow</li>
                <li>Grey</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              sx={{
                color: "black",
              }}>
              Brand
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ul>
                <li>Bewakoof</li>
                <li>Dillinger</li>
                <li>Olavi</li>
                <li>Botnia</li>
                <li>Difference Of Opinion</li>
                <li>Teeshut</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              Design
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ul>
                <li>Graphic Print</li>
                <li>Typography</li>
                <li>Solid</li>
                <li>Aop</li>
                <li>Tie & Dye</li>
                <li>Striped</li>
                <li>Color Block</li>
                <li>Printed</li>
                <li>Floral Print</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              Sleeve
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ul>
                <li>Half Sleeve</li>
                <li>Full Sleeve</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              Offers
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ui>
                <li>Buy 3 for 119</li>
              </ui>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              Discount
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ul>
                <li>10% Or More</li>
                <li>20% Or More</li>
                <li>30% Or More</li>
                <li>40% Or More</li>
                <li>50% Or More</li>
                <li>60% Or More</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
          gap="40px"
          width="68%">
          {filteredProduct?.map((obj, index) => (
              <Product key={index} obj={obj} size={{ width: "200px", height: "350px" }} />
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SearchResults;