import React, { useState } from "react";
import {
    Box, Grid, TextField, Typography, Button,
    FormControl, IconButton, InputAdornment, Divider
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { MdTextFields } from "react-icons/md";
import { uploadImage, createQuote } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { showSuccessToast, showErrorToast } from "../../utils/toastUtil";

const QuoteCreationComponent = () => {
    const { handleSubmit, control, setValue, formState: { errors } } = useForm();
    const [selectedImage, setSelectedImage] = useState("");
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();

    // Handle form submission
    const onSubmit = async (data) => {
        try {
            setUploading(true);

            // Upload the image
            console.log("Uploading image...");
            const imageResponse = await uploadImage(data.quoteImage);
            console.log("Image response:", imageResponse);

            if (!imageResponse || !imageResponse.url) {
                showErrorToast("Failed to upload image. Please try again.");
                setUploading(false);
                return;
            }

            const mediaUrl = imageResponse.url;

            // Create the quote using the uploaded media URL
            console.log("Creating quote with media URL:", mediaUrl);
            const response = await createQuote(data.quoteText, mediaUrl);

            if (response && response.success) {
                showSuccessToast("Quote created successfully!");
                navigate("/"); // Navigate to the quote list page
            } else {
                showErrorToast("Failed to create quote. Please try again.");
            }
        } catch (error) {
            console.error("Error in quote creation:", error);
            showErrorToast(error.message || "Failed to create quote. Please try again.");
        } finally {
            setUploading(false);
        }
    };


    // Handle image change
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setValue("quoteImage", file);
        }
    };

    // Reset image selection
    const resetImage = () => {
        setSelectedImage("");
        setValue("quoteImage", "");
        document.getElementById("quoteImage").value = "";
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", overflowY: "auto" }}>
            <Typography variant="h4" sx={{ mb: 2, color: "#377D99", fontWeight: "bold" }}>
                Create Quote
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller
                            name="quoteText"
                            control={control}
                            rules={{
                                required: "Quote text is required",
                                maxLength: { value: 200, message: "Quote text cannot exceed 200 characters" }
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Quote Text"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    error={!!errors.quoteText}
                                    helperText={errors.quoteText?.message}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MdTextFields size={24} style={{ color: "#377D99" }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Divider>
                            <Typography sx={{ color: "#377D99" }}>Image Upload</Typography>
                        </Divider>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "10px", border: "1px solid #ccc", padding: "20px", position: "relative" }}>
                            <input
                                type="file"
                                id="quoteImage"
                                accept="image/*"
                                style={{ display: "none" }}
                                name="quoteImage"
                                onChange={handleImageChange}
                            />
                            {!selectedImage ? (
                                <label htmlFor="quoteImage">
                                    <Button
                                        sx={{ backgroundColor: "#377D99" }}
                                        component="span"
                                        variant="contained"
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        Upload Image
                                    </Button>
                                </label>
                            ) : (
                                <>
                                    <Typography
                                        component="label"
                                        variant="contained"
                                        htmlFor="quoteImage"
                                        sx={{ position: "absolute", left: "10px", top: "10px" }}
                                    >
                                        Quote Image
                                    </Typography>
                                    <IconButton
                                        component="label"
                                        variant="contained"
                                        htmlFor="quoteImage"
                                        sx={{ position: "absolute", right: "30px", top: "0px" }}
                                    >
                                        <ModeEditIcon color="primary" />
                                    </IconButton>
                                    <IconButton
                                        onClick={resetImage}
                                        variant="contained"
                                        sx={{ position: "absolute", right: "0px", top: "0px" }}
                                    >
                                        <DeleteIcon color="error" />
                                    </IconButton>
                                    <div>
                                        <img
                                            src={selectedImage}
                                            alt="Preview"
                                            style={{ objectFit: "cover", maxWidth: "100%", height: "200px" }}
                                        />
                                    </div>
                                </>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ backgroundColor: "#377D99" }}
                            disabled={uploading}
                        >
                            {uploading ? "Uploading..." : "Submit Quote"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default QuoteCreationComponent;
