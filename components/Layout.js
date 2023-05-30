export default (children) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="/css/style.css" rel="stylesheet"/>
</head>
<body>
  ${children}
</body>
</html>  
  `
}