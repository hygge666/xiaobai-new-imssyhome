/*
 * @Author: xiaobai
 * @Date: 2024-05-25 15:30:06
 * @LastEditors: dushuai
 * @LastEditTime: 2024-05-15 22:30:34
 * @description: 一些配置数据
 */

type Website = {
  name: string,
  href: string,
  icon: string,
  iconType?: 'icon' | 'img'
}

export const useData = () => {
  /**
   * 网站列表
   */
  const websites = ref<Website[]>([
    { name: 'homepage', href: 'https://all.hylove.top/', icon: 'mdi:web-check' },
    { name: '博客', href: 'https://hylove.top/', icon: 'fa6-solid:blog' },
    // { name: 'create-kd', href: 'https://create-keep-design.dshuais.com/', icon: 'k' },
    { name: '今日热榜', href: 'https://hot.hylove.top/', icon: 'https://files.dshuais.com/images/logo/k.png', iconType: 'img' },
    { name: '站点监控', href: 'https://status.hylove.top/', icon: 'https://files.dshuais.com/images/logo/dm.png', iconType: 'img' },
    { name: '云盘', href: 'http://lixinyuanqi.ysepan.com/', icon: 'fa6-solid:cloud' },
    { "name": "AI导航", "href": "http://ai.hylove.top/", "icon": "fa6-solid:paper-plane" }
  ])
  ])

  return {
    websites
  }
}
