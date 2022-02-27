# Database Model Schema

## Pet's Description Table

`name: {`  
&nbsp;&nbsp;`type: DataTypes.STRING,`  
&nbsp;&nbsp;`required: true,`  
`},`  
`description: {`  
&nbsp;&nbsp;`type: DataTypes.STRING,`  
&nbsp;&nbsp;`required: true,`  
`},`  
`image: {`  
&nbsp;&nbsp;`type: DataTypes.BLOB,`  
`},`    
`age: {`  
&nbsp;&nbsp;`type: DataTypes.NUMBER,`  
`},`    
`breed: {`  
&nbsp;&nbsp;`type: DataTypes.STRING,`  
`},`    
`lostLocation: {`  
&nbsp;&nbsp;`type: DataTypes.STRING,`  
&nbsp;&nbsp;`required: true,`  
`},`   
`lastLocation: {`  
&nbsp;&nbsp;`type: DataTypes.STRING,`  
`},`    
`trackerChip: {`  
&nbsp;&nbsp;`type: DataTypes.BOOLEAN,`  
`},`    
`reward: {`  
&nbsp;&nbsp;`type: DataTypes.NUMBER,`  
`}`    

## User's Profile Table

`first name: {`  
&nbsp;&nbsp;`type: DataTypes.STRING,`  
&nbsp;&nbsp;`required: true,`  
`},`  
`last name: {`  
&nbsp;&nbsp;`type: DataTypes.STRING,`  
&nbsp;&nbsp;`required: true,`  
`},`  
`password: {`  
&nbsp;&nbsp;`type: DataTypes.STRING,`  
`},`    
`role: {`  
&nbsp;&nbsp;`type: DataTypes.String,`  
`},`  

## Comment's Table

`commentText: {`  
&nbsp;&nbsp;`type: DataTypes.STRING,`  
`},`    
`originalCommentID: {`  
&nbsp;&nbsp;`type: DataTypes.Number,`  
`},`  
`reply: {`  
&nbsp;&nbsp;`type: DataTypes.BOOLEAN,`  
`},` 
