<template>
  <main>
    <Card class="centered-card" header="Login">
      <Form label-width="120px">
        <FormItem label="Username">
          <Input v-model="username"></Input>
        </FormItem>
        <FormItem label="Password">
          <Input v-model="password" type="password"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary">Login</Button>
        </FormItem>
      </Form>
    </Card>
  </main>
</template>

<script>
  import { Card, Form, FormItem, Input, Button } from "element-ui";

  export default {
    name: "App",
    components: { Card, Form, FormItem, Input, Button },
    data() {
      return {
        username: "",
        password: "",
      };
    },
  };
</script>

<style type="text/css" scoped>
  .centered-card {
    margin: 100px auto;
    width: 500px;
  }
</style>
