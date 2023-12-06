import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../Utils/StateProvider";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import Product from "../Products/Product";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FilteredPage() {
  const [{ filteredProducts, products }] = useStateProvider();
  const [filteredProduct, setFilteredProduct] = useState(null);
  const [duplicateFilter, setduplicateFilter] = useState(null);

  useEffect(() => {
    const filtered = products?.filter(
      (obj) =>
        obj.sellerTag.charAt(0).toUpperCase(1) + obj.sellerTag.slice(1) ===
        filteredProducts,
    );
    setFilteredProduct(filtered);
    setduplicateFilter(filtered);
  }, []);

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
          {filteredProducts}
        </Typography>
        <Typography variant="h5" marginLeft="15px">
          {`(${filteredProduct?.length})`}
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
                <li value="men">
                  Men
                </li>
                <li
                  value="women">
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
              <ul >
                <li >Below 100</li>
                <li>Below 500</li>
                <li >Below 750</li>
                <li >Below 1000</li>
                <li >Below 1500</li>
                <li >Below 2000</li>
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
              Color
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ul>
                <li>Black</li>
                <li>White</li>
                <li>Brown</li>
                <li>Blue</li>
                <li>Green</li>
                <li>Red</li>
                <li>Pink</li>
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
              // id="panel1a-header"
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
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
          gap="40px"
          width="68%">
          {filteredProduct?.length === 0 ? (
            <Typography alignSelf="baseline">
              Please Choose Another Category
            </Typography>
          ) : (
            filteredProduct?.map((obj) => {
              return (
                <Product
                  obj={obj}
                  key={obj._id}
                  size={{ width: "300px", height: "406px" }}
                />
              );
            })
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default FilteredPage;