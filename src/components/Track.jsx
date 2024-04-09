import { Box } from "@mui/material";




export const Track = () => {
    return(
        <Box maxWidth="xl" style={{ backgroundColor: "#F6F7EB"}}>
            <Box margin="10px" maxWidth="sm" id="track" className="py-5 mx-auto">
                <form>
                    <Box margin="10px" data-mdb-input-init className="form-outline mt-5 mx-auto form-group">
                        <label className="form-label mb-2" for="tracker" style={{ color: "#033C5F", fontWeight:"900"}}>Tracking Number</label>
                        <input type="text" name="tracker" placeholder="Tracking Number" className="form-control px-2" />
                    </Box>

                    <button data-mdb-ripple-init type="submit" className="btn btn-warning btn-block px-2 py-2">Enter</button>
                </form>
            </Box>
        </Box>
    )
}