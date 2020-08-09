import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { useProjectState } from '../../context/projectsContext';
import { convertToReadableDate } from '../../utils/dateUtils';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '95%',
        marginTop: 45
    },
    left: {
        width: '30%',
        marginRight: 24
    },
    right: {
        width: '70%',
        border: 'solid'
    },
    projectName: {
        fontFamily: 'Montserrat',
        fontSize: 24,
    },
    createdDateTime: {
        fontFamily: 'Montserrat',
        fontSize: 16,
    },
    descriptionHeaderText: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        margin: '8px 0px 4px 0px',
    },
    descriptionText: {
        fontSize: 15,
        fontFamily: 'Montserrat',
    },
    overviewContainer: {
        backgroundColor: '#F4F1DE',
        height: 130,
        padding: 16,
        marginTop: 16
    },
    overviewHeaderText: {
        fontFamily: 'Montserrat',
        fontSize: 19,
        textDecoration: 'underline',
        marginBottom: '8px'
    },
    overviewItemContainer: {
        display: 'flex',
        marginBottom: 8
    },
    overviewItemText: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        marginLeft: 8
    }
})

export default function ProjectContainer() {

    let classes = useStyles();
    let project = useProjectState();

    return (
        <>
            {project && (
                <Box className={classes.root}>
                    <Box className={classes.left}>
                        <Typography className={classes.projectName}>{project.name}</Typography>
                        <Typography className={classes.createdDateTime}>Created {convertToReadableDate(project.createdDateTime)} </Typography>
                        <Typography className={classes.descriptionHeaderText}>Description</Typography>
                        <Typography className={classes.descriptionText}>{project.description}</Typography>



                        <Box className={classes.overviewContainer}>
                            <Typography className={classes.overviewHeaderText}>OVERVIEW</Typography>
                            <Box className={classes.overviewItemContainer}>
                                <svg width="25" height="25" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1.5H9.375V2.125H5V1.5Z" fill="black" />
                                    <path d="M5 5.875H9.375V6.5H5V5.875Z" fill="black" />
                                    <path d="M3.125 3.375H1.25C1.08429 3.37483 0.925415 3.30893 0.808241 3.19176C0.691067 3.07458 0.625165 2.91571 0.625 2.75V0.875C0.625165 0.70929 0.691067 0.550415 0.808241 0.433241C0.925415 0.316067 1.08429 0.250165 1.25 0.25H3.125C3.29071 0.250165 3.44958 0.316067 3.56676 0.433241C3.68393 0.550415 3.74983 0.70929 3.75 0.875V2.75C3.74983 2.91571 3.68393 3.07458 3.56676 3.19176C3.44958 3.30893 3.29071 3.37483 3.125 3.375ZM1.25 0.875V2.75H3.12531L3.125 0.875H1.25Z" fill="black" />
                                    <path d="M3.125 7.75H1.25C1.08429 7.74983 0.925415 7.68393 0.808241 7.56676C0.691067 7.44958 0.625165 7.29071 0.625 7.125V5.25C0.625165 5.08429 0.691067 4.92542 0.808241 4.80824C0.925415 4.69107 1.08429 4.62517 1.25 4.625H3.125C3.29071 4.62517 3.44958 4.69107 3.56676 4.80824C3.68393 4.92542 3.74983 5.08429 3.75 5.25V7.125C3.74983 7.29071 3.68393 7.44958 3.56676 7.56676C3.44958 7.68393 3.29071 7.74983 3.125 7.75ZM1.25 5.25V7.125H3.12531L3.125 5.25H1.25Z" fill="black" />
                                </svg>
                                <Typography className={classes.overviewItemText}>2 Tasks</Typography>
                            </Box>
                            <Box className={classes.overviewItemContainer}>
                                <svg width="25" height="25" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.26297 7.37561H0.605247V1.58114H4.60593L5.21118 1.05437H0.605247C0.444726 1.05437 0.290779 1.10987 0.177273 1.20865C0.0637669 1.30744 0 1.44143 0 1.58114V7.37561C0 7.51532 0.0637669 7.6493 0.177273 7.74809C0.290779 7.84688 0.444726 7.90238 0.605247 7.90238H7.26297C7.42349 7.90238 7.57743 7.84688 7.69094 7.74809C7.80444 7.6493 7.86821 7.51532 7.86821 7.37561V3.42483L7.26297 3.9516V7.37561Z" fill="black" />
                                    <path d="M8.93642 1.01222L7.91658 0.124612C7.87132 0.0851126 7.81755 0.0537733 7.75835 0.0323901C7.69915 0.0110069 7.63568 0 7.57159 0C7.50749 0 7.44403 0.0110069 7.38483 0.0323901C7.32563 0.0537733 7.27186 0.0851126 7.2266 0.124612L3.07763 3.75669L2.74172 5.02358C2.72741 5.08499 2.72891 5.1484 2.74612 5.20924C2.76333 5.27008 2.79582 5.32685 2.84126 5.37546C2.88669 5.42407 2.94394 5.46331 3.00888 5.49036C3.07382 5.51741 3.14484 5.5316 3.21684 5.53191C3.25405 5.53548 3.2916 5.53548 3.32881 5.53191L4.79653 5.25009L8.93642 1.61274C8.9818 1.57335 9.01781 1.52655 9.04238 1.47502C9.06695 1.4235 9.0796 1.36826 9.0796 1.31248C9.0796 1.25669 9.06695 1.20146 9.04238 1.14993C9.01781 1.09841 8.9818 1.05161 8.93642 1.01222ZM4.4818 4.76283L3.3742 4.97617L3.63143 4.02008L6.7545 1.28351L7.6079 2.02625L4.4818 4.76283ZM7.94987 1.72863L7.09647 0.985882L7.56554 0.569733L8.42499 1.31775L7.94987 1.72863Z" fill="black" />
                                </svg>
                                <Typography className={classes.overviewItemText}>5 Notes</Typography>
                            </Box>
                            <Box className={classes.overviewItemContainer}>
                                <svg width="25" height="25" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.85813 0H2.16182C1.58847 8.67512e-09 1.0386 0.231269 0.633183 0.642931C0.227763 1.05459 0 1.61293 0 2.1951C0 2.77728 0.227763 3.33561 0.633183 3.74728C1.0386 4.15894 1.58847 4.39021 2.16182 4.39021H4.32364C4.66959 4.39039 5.01052 4.30627 5.31781 4.14491C5.6251 3.98356 5.88976 3.74968 6.08957 3.46292C6.28937 3.17616 6.41848 2.8449 6.46606 2.49696C6.51363 2.14903 6.47827 1.79458 6.36296 1.4634H5.76485C5.70288 1.4634 5.64235 1.47072 5.5847 1.48609C5.70623 1.70889 5.76839 1.96005 5.76503 2.21472C5.76166 2.4694 5.6929 2.71877 5.56553 2.93819C5.43816 3.15761 5.2566 3.33947 5.03879 3.46581C4.82098 3.59214 4.57448 3.65856 4.32364 3.65851H2.16182C1.77959 3.65851 1.41301 3.50433 1.14273 3.22988C0.872449 2.95544 0.720607 2.58322 0.720607 2.1951C0.720607 1.80699 0.872449 1.43476 1.14273 1.16032C1.41301 0.885881 1.77959 0.731701 2.16182 0.731701H3.26795C3.42504 0.456582 3.62465 0.209267 3.85885 0H3.85813Z" fill="black" />
                                    <path d="M5.76485 3.01813e-07C5.41891 -0.000183884 5.07797 0.0839359 4.77068 0.245293C4.4634 0.40665 4.19873 0.640531 3.99893 0.92729C3.79912 1.21405 3.67001 1.54531 3.62244 1.89324C3.57486 2.24118 3.61022 2.59562 3.72554 2.9268H4.51676C4.39027 2.70434 4.32368 2.45199 4.32368 2.19511C4.32367 1.93824 4.39026 1.68588 4.51675 1.46342C4.64324 1.24095 4.82517 1.05622 5.04426 0.927774C5.26335 0.799331 5.51187 0.731708 5.76485 0.731701H7.92667C8.30891 0.731701 8.67549 0.885881 8.94577 1.16032C9.21604 1.43476 9.36789 1.80699 9.36789 2.1951C9.36789 2.58322 9.21604 2.95544 8.94577 3.22989C8.67549 3.50433 8.30891 3.65851 7.92667 3.65851H6.82054C6.66376 3.93319 6.46421 4.18028 6.22964 4.39021H7.92667C8.21057 4.39021 8.49168 4.33343 8.75397 4.22311C9.01625 4.1128 9.25457 3.95111 9.45531 3.74728C9.65605 3.54344 9.81529 3.30146 9.92394 3.03513C10.0326 2.76881 10.0885 2.48337 10.0885 2.1951C10.0885 1.90684 10.0326 1.6214 9.92394 1.35507C9.81529 1.08875 9.65605 0.846765 9.45531 0.642931C9.25457 0.439097 9.01625 0.277407 8.75397 0.167093C8.49168 0.0567785 8.21057 2.97518e-07 7.92667 3.01813e-07H5.76485Z" fill="black" />
                                </svg>
                                <Typography className={classes.overviewItemText}>3 Resources</Typography>
                            </Box>

                        </Box>

                    </Box>
                    <Box className={classes.right}>
                        <Typography>Placeholder</Typography>
                    </Box>
                </Box>
            )}
        </>

    )
}