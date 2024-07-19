const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};

//testing with registor, login , get , post, put,  delete api.
//register post api http://localhost:5000/register body {"username":"user2", "password":"password2"}
//login post api http://localhost:5000/register body {"username":"user2", "password":"password2"}
//get all api http://localhost:5000/friends
//get with email api http://localhost:5000/friends/johnsmith@gamil.com
//put/update with email api http://localhost:5000/friends/johnsmith@gamil.com  and json body {"DOB":"22-12-1991"}
//delete with email api http://localhost:5000/friends/johnsmith@gamil.com

// GET request: Retrieve all friends
router.get("/",(req,res)=>{

  // Update the code here
  res.send(JSON.stringify(friends, null , 4))

  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
  email= req.params.email;
  // Update the code here
  res.send(friends[email])
});


// POST request: Add a new friend
router.post("/",(req,res)=>{
  // Update the code here
 if (req.body.email) {
    friends[req.body.email]={
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "DOB": req.body.DOB,
    }
 } 
 res.send("The user " + (req.body.firstName) + " has been addedd.")
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Update the code here
  const email = req.params.email;
  let friend = friends[email];
  if (friend) {
     let firstName = req.body.firstName;
     let lastName = req.body.lastName;
     let DOB = req.body.DOB;
    if (firstName) {
      friend["firstName"] = firstName;
    }
     
    if (lastName) {
      friend["lastName"] = lastName;
    }
     
    if (DOB) {
      friend["DOB"] = DOB;
    }

    friends[email] = friend;
    res.send(`Friend with the email ${email} updated. `)
  } else {
    res.send("Unable to find friend!")
  }
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  let email = req.params.email;
  if (email) {
    delete friends["email"];
  }
  res.send(`Friend with the email ${email} deleted.`)//This line is to be replaced with actual return value
});

module.exports=router;
