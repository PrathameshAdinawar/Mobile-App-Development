  //View is an container like Div is react
    <ScrollView
      style={{ flex: 1, marginTop:50 }}
      contentContainerStyle={{
        padding: 16, alignItems: "center"
      }}

    >

    //   {/* <Text numberOfLines={2}>
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, laudantium officia? Porro accusamus, harum nulla corrupti nostrum eum. Nulla alias, quisquam commodi temporibus iusto odio quidem reiciendis soluta illo fugit.</Text>
    //   <Image source={{ uri: "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_640.jpg" }}
    //     width={400} height={400}
    //   />

    //   <Image source={require('@/assets/images/icon.png')}
    //     style={{
    //       width: 100,
    //       height: 100
    //     }}
    //     blurRadius={5}
    //   /> */}

    //   {/* always use onChangeText because it is light weight string */}
    //   {/* <TextInput placeholder="enter name" value={name} onChangeText={setName} placeholderTextColor={"blue"} style={{ backgroundColor: 'rgb(236, 236, 244)' }} /> */}

    //   {/* <Pressable onPress={()=>{alert('pressed')}}> */}
    //   {/* <Pressable onPress={() => { alert('pressed') }}
    //     style={({ pressed }) => ({backgroundColor:pressed ? '#f5f3f3' : '#5d5a5a'})}>
    //     <Text>press kro ji</Text>
    //   </Pressable> */}

    //   {/* {
    //     items.map((items) => (
    //       <Text key={items}
    //         style={{
    //           backgroundColor: 'white', padding: 10,
    //           elevation: 1, borderRadius: 10,
    //           shadowRadius: 4, marginBottom: 10, shadowOpacity:5
    //         }}>
    //         {items}
    //       </Text>
    //     ))
    //   }

    //   <Button title="btn" color={'green'} onPress={()=>alert('clicked')}/>

    //     <Switch
    //     value={isDarkMode}
    //     onValueChange={setDarkMode}
    //     trackColor={{true:'white',false:'blue'}}
    //     thumbColor={'grey'}
    //     /> */}

        

     </ScrollView> 


     import { Background } from "@react-navigation/elements";
import { useState } from "react";
import { View, Text, Image, TextInput, Pressable, ScrollView, Button, Switch, FlatList } from "react-native";

export default function Home() {
  // const [name, setName] = useState('')
  // const items = Array.from({ length: 50 }, (_, i) => `items ${i}`)
  // const [isDarkMode, setDarkMode] = useState(false)

  const User = [
    { id: '1', name: 'pratham', role: 'Developer' },
    { id: '2', name: 'ayush', role: 'Data analyist' },
    { id: '3', name: 'shaya', role: 'System designer' },
    { id: '4', name: 'om', role: 'Networking' },

  ];
  return (

    <FlatList
      data={User}
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => <Text>Name :{item.name}  Role: {item.role}</Text>}
      style={{padding:30 }}
    />


  );

}