import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
 
export function ListWithAvatar({categories}) {
  console.log(categories)
  return (
    <Card className="max-w-[900px]">
      <List>

        {categories.map((cat) => {
          return <ListItem key={cat.idCategory}>
              
            <Avatar
             className="mr-5"
             variant="circular" 
             alt="candice" 
             src={cat.strCategoryThumb} />
          
          <div>
            <Typography variant="h6" color="blue-gray">
              {cat.strCategory}
            </Typography>
            <p variant="small" color="gray" className="font-normal line-clamp-3">
              {cat.strCategoryDescription}
            </p>
          </div>
        </ListItem>
        })}

       
      </List>
    </Card>
  );
}