import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    Tooltip,
} from "@mui/material";
import { lazy, Suspense } from "react";
import PropTypes from "prop-types";

const IoMdClose = lazy(() =>
    import("react-icons/io").then((module) => ({ default: module.IoMdClose }))
);

const DialogComponent = ({
    title,
    open,
    close,
    children,
    denseVertical = false,
}) => {
    return (
        <Suspense>
            <Dialog
                open={open}
                onClose={close} // Close dialog when clicking outside
                scroll={"paper"}
                fullWidth
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <DialogTitle>{title}</DialogTitle>
                    <Tooltip arrow title="Close">
                        <IconButton className="!me-2" aria-label="close" onClick={close}>
                            <Suspense>
                                <IoMdClose />
                            </Suspense>
                        </IconButton>
                    </Tooltip>
                </Stack>

                <DialogContent dividers className={`${denseVertical ? "!py-0" : ""}`}>
                    {children}
                </DialogContent>
            </Dialog>
        </Suspense>
    );
};

DialogComponent.propTypes = {
    title: PropTypes.string,
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    denseVertical: PropTypes.bool,
};

export default DialogComponent;
