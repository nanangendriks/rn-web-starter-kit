import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

const Home = ({ navigation }) => {
  return (
    <ScrollView style={tailwind('flex-1')}>
      <View style={tailwind('bg-white p-4')}>
        <View style={tailwind('flex-row')}>
          <View style={tailwind('bg-gray-300 h-20 w-20 rounded-full')} />
          <View style={tailwind('ml-2 flex-1')}>
            <Text style={tailwind('font-bold text-lg text-gray-600')}>
              Coba Ayam Geprek
            </Text>
            <View style={tailwind('w-1/2 mt-2')}>
              <Text
                style={tailwind(
                  'font-bold text-xs text-green-600 flex-none rounded-md'
                )}
              >
                2 Pesanan selesai
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={tailwind('bg-white p-4 mt-1')}>
        <View style={tailwind('flex-row justify-between ')}>
          <Text>Total Pendapatan</Text>
          <Text>Bulan ini</Text>
        </View>
        <Text style={tailwind('font-bold text-lg text-gray-600 pt-2')}>
          Rp 12.000.000
        </Text>
      </View>

      <View style={tailwind('bg-white flex-row justify-between mt-1')}>
        <View style={tailwind('flex-1 items-center bg-white p-4 text-center')}>
          <Text style={tailwind('text-xs')}>Pesanan Baru</Text>
          <Text style={tailwind('font-bold text-lg text-gray-600 pt-2')}>
            6
          </Text>
        </View>
        <View style={tailwind('m-1')} />
        <View style={tailwind('flex-1 items-center bg-white p-4 text-center')}>
          <Text style={tailwind('text-xs')}>Siap Dikirim</Text>
          <Text style={tailwind('font-bold text-lg text-gray-600 pt-2')}>
            6
          </Text>
        </View>
      </View>

      <View style={tailwind('bg-white mt-1')}>
        <View style={tailwind('flex-row justify-between px-4 pt-2')}>
          <Text style={tailwind('text-gray-600 font-bold')}>Produk</Text>
          <Text style={tailwind('text-xs font-bold text-green-600')}>
            Tambah Produk
          </Text>
        </View>
        <View style={tailwind('p-4')}>
          <Text style={tailwind('text-xs text-gray-600 font-bold')}>
            Daftar Produk
          </Text>
          <Text style={tailwind('text-xs')}>1 produk</Text>
        </View>
        <View style={tailwind('p-4')}>
          <Text style={tailwind('text-xs text-gray-600 font-bold')}>Promo</Text>
          <Text style={tailwind('text-xs')}>2 promo aktif</Text>
        </View>
        <View style={tailwind('p-4')}>
          <Text style={tailwind('text-xs text-gray-600 font-bold')}>
            Ulasan
          </Text>
          <Text style={tailwind('text-xs')}>5 ulasan</Text>
        </View>
      </View>

      <View style={tailwind('bg-white mt-1')}>
        <Text style={tailwind('p-4 text-gray-600 font-bold')}>
          Produk Terlaris
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tailwind('pl-4 mb-4')}
        >
          <View style={[tailwind('bg-gray-100 h-44 w-32 rounded-md mr-2')]}>
            <View style={tailwind('h-28 w-full bg-gray-300 rounded-t-md')} />
            <View style={tailwind('p-2')}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={tailwind('text-xs font-semibold')}
              >
                Nama Produk
              </Text>
            </View>
          </View>
          <View style={[tailwind('bg-gray-100 h-44 w-32 rounded-md mr-2')]}>
            <View style={tailwind('h-28 w-full bg-gray-300 rounded-t-md')} />
            <View style={tailwind('p-2')}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={tailwind('text-xs font-semibold')}
              >
                Nama Produk
              </Text>
            </View>
          </View>
          <View style={[tailwind('bg-gray-100 h-44 w-32 rounded-md mr-2')]}>
            <View style={tailwind('h-28 w-full bg-gray-300 rounded-t-md')} />
            <View style={tailwind('p-2')}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={tailwind('text-xs font-semibold')}
              >
                Nama Produk
              </Text>
            </View>
          </View>
          <View style={[tailwind('bg-gray-100 h-44 w-32 rounded-md mr-2')]}>
            <View style={tailwind('h-28 w-full bg-gray-300 rounded-t-md')} />
            <View style={tailwind('p-2')}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={tailwind('text-xs font-semibold')}
              >
                Nama Produk
              </Text>
            </View>
          </View>
          <View style={[tailwind('bg-gray-100 h-44 w-32 rounded-md mr-2')]}>
            <View style={tailwind('h-28 w-full bg-gray-300 rounded-t-md')} />
            <View style={tailwind('p-2')}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={tailwind('text-xs font-semibold')}
              >
                Nama Produk
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;
