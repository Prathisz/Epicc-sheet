import React from 'react'
// import img from 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_09_Tree-Data-Structures.jpg';
import { Box, Typography } from '@mui/material';
function Treecnt() {
  return (
    <div>
        <div style={{marginLeft:'20px'}}>
        <h2>EPICC Tree Series : Tree Data Structure</h2>
      <img src='https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_09_Tree-Data-Structures.jpg' style={{width:'700px'}}></img>
      </div>
      <Box sx={{marginLeft:'20px'}}>
        <h2><b>What is a tree data structure?</b></h2>
        <p>
            There are two major types of data structures:<br>
            </br>
<br></br>
1.Linear<br></br>
2.Non-Linear<br></br>
<br></br>
Tree is a Non-linear data structure where as Arrays, LinkedList are linear data structures. What makes tree a non-linear data structure is, the information or data is not stored in a sequential fashion, same is for traversal or retrieval.
Unlike, in arrays, we know that elements are stored at contiguous memory locations, however, it is not the same with trees. The nodes in a tree can be stored at random memory locations and can be linked to each other using pointers to define the structure of the tree </p></Box>

<Box sx={{marginLeft:'20px'}}>
    <h2>Why is tree data structure important?</h2>
    <Typography>
    To understand why tree? Think about why we created other data structures. In order to do that, link every data structure to some real world entity and see where it fit’s well</Typography>
</Box>
<Box sx={{marginLeft:'20px'}}>
    <h2>Tree data structure in C, C++, Java, Python</h2>
    <Typography>However, no data-structure is bound by any programming language. You can choose any of the above popular programming language and implement all possible trees in it. But, we highly recommend to go with any one of C++, Java or Python. These are object oriented language with a good number of inbuilt library functions</Typography>
</Box>
<Box sx={{marginLeft:'20px'}}>
    <h2>Why Striver’s Tree Series?</h2>
    <Typography>
    This is sheet is prepared by Raj Vikramaditya A.K.A Striver, Candidate Master, 6*, who has bagged offers from Google Warsaw, Facebook London, Media.net(Directi). He has also interned at Amazon India. He is also one of the top educators at Unacademy and was at GeeksforGeeks as well.
    </Typography>
</Box>

    </div>
  )
}

export default Treecnt

