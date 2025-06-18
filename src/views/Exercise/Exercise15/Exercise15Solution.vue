<template>
  <h2>代码分块</h2>
  <el-table :data="codeData" style="width: 100%">
    <el-table-column prop="id" label="编号" width="80" />
    <el-table-column prop="code" label="代码块">
      <template #default="{ row }">
        <pre style="white-space: pre-wrap;">{{ row.code }}</pre>
      </template>
    </el-table-column>
  </el-table>
  <h2>流程控制图</h2>
  <img src="@/assets/15-2.png" alt="15-2">
</template>

<script setup>
import { ref } from 'vue'

const codeData = ref([
  {
    id: 1,
    code: "unsigned  Zcode, Bcode;                    \nint  i, j, k, Rec, Color;\nlong Len;\nchar Buf[72];"
  },
  {
    id: 2,
    code: "while (*Str)"
  },
  {
    id: 3,
    code: "if ((*Str & 0x80) && (*(Str+1) &0x80))"
  },
  {
    id: 4,
    code: "Zcode = (*Str-0xa1) & 0x07f;          \nBcode = (*(Str+1)-0xa1) & 0x07f;      \nRec = Zcode*94+Bcode;                 \nLen = Rec*72L;                        \nfseek(fp, Len, SEEK_SET);\nfread (Buf, 1, 72, fp);"
  },
  {
    id: 5,
    code: "i = 0"
  },
  {
    id: 6,
    code: "i < 24"
  },
  {
    id: 7,
    code: "j = 0"
  },
  {
    id: 8,
    code: "j < 3"
  },
  {
    id: 9,
    code: "k = 0"
  },
  {
    id: 10,
    code: "k < 8"
  },
  {
    id: 11,
    code: "if (Buf[i*3+j] >> (7-k) & 1)"
  },
  {
    id: 12,
    code: "Color = y+j*8+k-46;\nPutPoint(x+i, y+j*8+k, Color);"
  },
  {
    id: 13,
    code: "k++"
  },
  {
    id: 14,
    code: "j++"
  },
  {
    id: 15,
    code: "i++"
  },
  {
    id: 16,
    code: "x = x+24+Wid;\nStr += 2;"
  },
  {
    id: 17,
    code: "return"
  }
])
</script>


<script>
export default {
  name: 'Exercise13Solution'
}
</script>



