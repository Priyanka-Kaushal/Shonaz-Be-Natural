import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

const TermsOfServices = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box sx={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Terms of Services
      </Typography>

      <Typography paragraph sx={{ mb: 2 }}>
        The Website Owner, including subsidiaries and affiliates (“shonaz.in” or “shonaz” or “we” or “us” or “our”) provides the information contained on the website or any of the pages comprising the website (“website”) to visitors (“visitors”) (cumulatively referred to as “you” or “your” hereinafter) subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of the website.
      </Typography>

      <Typography paragraph sx={{ mb: 2 }}>
        Welcome to shonaz.in. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern shonaz.in’s relationship with you in relation to this website.
      </Typography>

      <Typography paragraph sx={{ mb: 2 }}>
        The term ‘shonaz’ ‘shonaz.in’ or ‘us’ or ‘we’ refers to the owner of the website whose registered office is in Jaipur, Rajasthan. The term ‘you’ refers to the user or viewer of our website.
      </Typography>

      <Typography paragraph sx={{ mb: 2 }}>
        The use of this website is subject to the following terms of use:
      </Typography>

      <Typography paragraph sx={{ mb: 2 }}>
        The content of the pages of this website is for your general information and use only. It is subject to change without notice.
        Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
      </Typography>

      <Typography paragraph sx={{ mb: 2 }}>
        Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.
        It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
      </Typography>

      <Typography paragraph sx={{ mb: 2 }}>
        This website contains material which is owned by or licensed to us. This material includes, but is not limited to,
        the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice,
        which forms part of these terms and conditions.
      </Typography>

      <Typography paragraph sx={{ mb: 2 }}>
        All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
        Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.
      </Typography>

      <Typography paragraph sx={{ mb: 2 }}>
        From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information.
        They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
      </Typography>

      <Typography paragraph sx={{ mb: 2 }}>
        You may not create a link to this website from another website or document without prior written consent.
        Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.
      </Typography>
    </Box>
  );
};

export default TermsOfServices;
