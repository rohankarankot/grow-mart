import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Slider, Typography } from '@mui/material';

export default function FilterComponent() {
    const [state, setState] = React.useState({
        left: false,
    });
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setState({ ...state, ["left"]: open });
            };

    const list = () => (
        <Box
            sx={{ width: 350 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Typography>Filter Pricess</Typography>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
                />
            <Divider />
            dfvdfv
        </Box>
    );

    return (
        <div>
            <React.Fragment >
                <Box sx={{ width: "180px", margin: "10px", display: "flex", alignItems: "center", cursor: "pointer" }} onClick={toggleDrawer(true)}><FilterAltIcon /> Filter Products</Box>
                <Drawer
                    open={state["left"]}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}