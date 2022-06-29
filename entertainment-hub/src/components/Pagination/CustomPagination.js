import { Pagination } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
const darkTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });
const CustomPagination = ({setPage, numOfPages = 10}) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    }
    
    return (
        <div  style={{
            width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        // backgroundColor:"white",
        }}>
            <ThemeProvider theme ={darkTheme}>
            <Pagination color="secondary" variant="outlined"
            onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
            />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
