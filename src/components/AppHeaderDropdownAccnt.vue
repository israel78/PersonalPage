<template>
  <CAvatar :src="avatar" size="md" />
</template>
<script>
import avatar from '@/assets/images/fotocurri.jpg'
export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      avatar: avatar,
    }
  },
}
</script>
