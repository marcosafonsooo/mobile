import React from 'react';
import { 
    View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet 
} from 'react-native';
import { useTarefas } from '../../hooks/useTarefas';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Adicione e controle suas artes / aulas pendentes!!</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite uma arte / aula..."
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <TouchableOpacity onPress={adicionarTarefa}>
                    <FontAwesome6 name="add" size={24} color="#49093e"/>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                            <FontAwesome6 name="trash-alt" size={24} color="#49093e" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#ffe7fa' },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#49093e'},
    inputContainer: { flexDirection: 'row', marginBottom: 10, alignItems: 'center'},
    input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginRight: 10, color: ''},
    tarefaContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: '#fff', 
        padding: 15, 
        marginBottom: 5, 
        borderRadius: 5, 
        shadowColor: '#000', 
        shadowOpacity: 0.1, 
        shadowRadius: 2, 
        elevation: 2 
    },
    tarefaTexto: { fontSize: 16 },
    remover: { fontSize: 18, color: 'red' },
});
